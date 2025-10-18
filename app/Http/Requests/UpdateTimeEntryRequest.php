<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UpdateTimeEntryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'task_id' => 'nullable|exists:tasks,id',
            'project_id' => 'sometimes|required|exists:projects,id',
            'description' => 'sometimes|required|string|max:500',
            'start_time' => 'sometimes|required|date',
            'end_time' => 'nullable|date|after:start_time',
            'duration_minutes' => 'nullable|integer|min:1',
            'is_billable' => 'nullable|boolean',
            'hourly_rate' => 'nullable|numeric|min:0',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'project_id.required' => 'Project selection is required.',
            'project_id.exists' => 'Selected project does not exist.',
            'task_id.exists' => 'Selected task does not exist.',
            'description.required' => 'Description is required.',
            'description.max' => 'Description cannot exceed 500 characters.',
            'start_time.required' => 'Start time is required.',
            'start_time.date' => 'Start time must be a valid date.',
            'end_time.date' => 'End time must be a valid date.',
            'end_time.after' => 'End time must be after start time.',
            'duration_minutes.integer' => 'Duration must be a whole number of minutes.',
            'duration_minutes.min' => 'Duration must be at least 1 minute.',
            'is_billable.boolean' => 'Billable status must be true or false.',
            'hourly_rate.numeric' => 'Hourly rate must be a valid number.',
            'hourly_rate.min' => 'Hourly rate cannot be negative.',
        ];
    }

    /**
     * Handle a failed validation attempt.
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422)
        );
    }

    /**
     * Configure the validator instance.
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            // Validate that project belongs to the authenticated user
            if ($this->project_id) {
                $project = \App\Models\Project::find($this->project_id);
                if (!$project || $project->created_by !== auth()->user()->email) {
                    $validator->errors()->add(
                        'project_id',
                        'You can only update time entries for your own projects.'
                    );
                }
            }

            // Validate that task belongs to the same project
            if ($this->task_id && $this->project_id) {
                $task = \App\Models\Task::find($this->task_id);
                if ($task && $task->project_id != $this->project_id) {
                    $validator->errors()->add(
                        'task_id',
                        'Task must belong to the selected project.'
                    );
                }
            }

            // Validate duration consistency
            if ($this->start_time && $this->end_time && $this->duration_minutes) {
                $calculatedMinutes = strtotime($this->end_time) - strtotime($this->start_time);
                $calculatedMinutes = $calculatedMinutes / 60; // Convert to minutes
                
                if (abs($calculatedMinutes - $this->duration_minutes) > 1) { // Allow 1 minute tolerance
                    $validator->errors()->add(
                        'duration_minutes',
                        'Duration does not match the time difference between start and end times.'
                    );
                }
            }

            // Validate no overlapping time entries for the same user (excluding current entry)
            if ($this->start_time && $this->end_time) {
                $timeEntryId = $this->route('time_entry')->id ?? null;
                
                $overlapping = \App\Models\TimeEntry::where('created_by', auth()->user()->email)
                    ->when($timeEntryId, function ($query) use ($timeEntryId) {
                        $query->where('id', '!=', $timeEntryId);
                    })
                    ->where(function ($query) {
                        $query->whereBetween('start_time', [$this->start_time, $this->end_time])
                              ->orWhereBetween('end_time', [$this->start_time, $this->end_time])
                              ->orWhere(function ($q) {
                                  $q->where('start_time', '<=', $this->start_time)
                                    ->where('end_time', '>=', $this->end_time);
                              });
                    })
                    ->exists();

                if ($overlapping) {
                    $validator->errors()->add(
                        'start_time',
                        'This time entry overlaps with an existing time entry.'
                    );
                }
            }
        });
    }
}
