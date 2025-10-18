<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreTaskRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'project_id' => 'required|exists:projects,id',
            'parent_task_id' => 'nullable|exists:tasks,id',
            'status' => 'nullable|in:todo,in_progress,review,completed',
            'priority' => 'nullable|in:low,medium,high',
            'priority_matrix' => 'nullable|in:important_urgent,important_not_urgent,not_important_urgent,not_important_not_urgent',
            'estimated_hours' => 'nullable|numeric|min:0',
            'confidence_level' => 'nullable|in:low,medium,high',
            'due_date' => 'nullable|date',
            'start_date' => 'nullable|date',
            'completion_date' => 'nullable|date',
            'dependencies' => 'nullable|array',
            'dependencies.*' => 'exists:tasks,id',
            'tags' => 'nullable|array',
            'tags.*' => 'string|max:50',
            'assignee' => 'nullable|string|max:255',
            'order_index' => 'nullable|integer|min:0',
            'is_critical_path' => 'nullable|boolean',
            'notes' => 'nullable|string',
            'attachments' => 'nullable|array',
            'attachments.*.name' => 'required_with:attachments|string|max:255',
            'attachments.*.url' => 'required_with:attachments|url',
            'attachments.*.size' => 'nullable|integer|min:0',
            'attachments.*.type' => 'nullable|string|max:100',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'title.required' => 'Task title is required.',
            'project_id.required' => 'Project selection is required.',
            'project_id.exists' => 'Selected project does not exist.',
            'parent_task_id.exists' => 'Selected parent task does not exist.',
            'status.in' => 'Invalid task status.',
            'priority.in' => 'Invalid priority level.',
            'priority_matrix.in' => 'Invalid priority matrix value.',
            'estimated_hours.numeric' => 'Estimated hours must be a valid number.',
            'estimated_hours.min' => 'Estimated hours cannot be negative.',
            'confidence_level.in' => 'Confidence level must be low, medium, or high.',
            'due_date.date' => 'Due date must be a valid date.',
            'start_date.date' => 'Start date must be a valid date.',
            'completion_date.date' => 'Completion date must be a valid date.',
            'dependencies.array' => 'Dependencies must be an array.',
            'dependencies.*.exists' => 'One or more dependency tasks do not exist.',
            'tags.array' => 'Tags must be an array.',
            'tags.*.string' => 'Each tag must be a string.',
            'tags.*.max' => 'Each tag cannot exceed 50 characters.',
            'assignee.string' => 'Assignee must be a string.',
            'assignee.max' => 'Assignee cannot exceed 255 characters.',
            'order_index.integer' => 'Order index must be a whole number.',
            'order_index.min' => 'Order index cannot be negative.',
            'is_critical_path.boolean' => 'Critical path must be true or false.',
            'attachments.array' => 'Attachments must be an array.',
            'attachments.*.name.required_with' => 'Attachment name is required.',
            'attachments.*.url.required_with' => 'Attachment URL is required.',
            'attachments.*.url.url' => 'Attachment URL must be a valid URL.',
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
            // Custom validation logic
            if ($this->start_date && $this->completion_date) {
                $start = strtotime($this->start_date);
                $completion = strtotime($this->completion_date);
                
                if ($completion < $start) {
                    $validator->errors()->add(
                        'completion_date',
                        'Completion date must be on or after the start date.'
                    );
                }
            }

            // Validate that project belongs to the authenticated user
            if ($this->project_id) {
                $project = \App\Models\Project::find($this->project_id);
                if (!$project || $project->created_by !== auth()->user()->email) {
                    $validator->errors()->add(
                        'project_id',
                        'You can only create tasks for your own projects.'
                    );
                }
            }

            // Validate that parent task belongs to the same project
            if ($this->parent_task_id && $this->project_id) {
                $parentTask = \App\Models\Task::find($this->parent_task_id);
                if ($parentTask && $parentTask->project_id != $this->project_id) {
                    $validator->errors()->add(
                        'parent_task_id',
                        'Parent task must belong to the same project.'
                    );
                }
            }

            // Validate dependencies don't create circular references
            if ($this->dependencies && is_array($this->dependencies)) {
                foreach ($this->dependencies as $dependencyId) {
                    $dependency = \App\Models\Task::find($dependencyId);
                    if ($dependency && $dependency->project_id != $this->project_id) {
                        $validator->errors()->add(
                            'dependencies',
                            'All dependency tasks must belong to the same project.'
                        );
                        break;
                    }
                }
            }
        });
    }
}
