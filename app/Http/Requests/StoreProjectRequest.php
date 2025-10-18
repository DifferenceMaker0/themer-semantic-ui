<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreProjectRequest extends FormRequest
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
            'client_id' => 'required|exists:clients,id',
            'project_type' => 'required|in:web_design,web_development,mobile_app,content_writing,copywriting,seo,social_media,consulting,branding,ui_ux_design,e_commerce,maintenance,other',
            'status' => 'nullable|in:planning,active,on_hold,completed,cancelled',
            'priority' => 'nullable|in:low,medium,high,urgent',
            'budget' => 'nullable|numeric|min:0',
            'estimated_hours' => 'nullable|numeric|min:0',
            'start_date' => 'nullable|date',
            'due_date' => 'nullable|date|after_or_equal:start_date',
            'completion_date' => 'nullable|date',
            'completion_percentage' => 'nullable|integer|min:0|max:100',
            'deliverables' => 'nullable|array',
            'deliverables.*.title' => 'required_with:deliverables|string|max:255',
            'deliverables.*.description' => 'nullable|string',
            'deliverables.*.completed' => 'nullable|boolean',
            'deliverables.*.due_date' => 'nullable|date',
            'milestones' => 'nullable|array',
            'milestones.*.title' => 'required_with:milestones|string|max:255',
            'milestones.*.description' => 'nullable|string',
            'milestones.*.due_date' => 'required_with:milestones|date',
            'milestones.*.completed' => 'nullable|boolean',
            'milestones.*.completion_date' => 'nullable|date',
            'risk_assessment' => 'nullable|array',
            'risk_assessment.scope_clarity' => 'nullable|integer|min:1|max:5',
            'risk_assessment.client_experience' => 'nullable|integer|min:1|max:5',
            'risk_assessment.technical_complexity' => 'nullable|integer|min:1|max:5',
            'risk_assessment.timeline_pressure' => 'nullable|integer|min:1|max:5',
            'risk_assessment.overall_risk' => 'nullable|in:low,medium,high',
            'ai_analysis' => 'nullable|array',
            'client_access_enabled' => 'nullable|boolean',
            'notes' => 'nullable|string',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'title.required' => 'Project title is required.',
            'client_id.required' => 'Client selection is required.',
            'client_id.exists' => 'Selected client does not exist.',
            'project_type.required' => 'Project type is required.',
            'project_type.in' => 'Invalid project type selected.',
            'status.in' => 'Invalid project status.',
            'priority.in' => 'Invalid priority level.',
            'budget.numeric' => 'Budget must be a valid number.',
            'budget.min' => 'Budget cannot be negative.',
            'estimated_hours.numeric' => 'Estimated hours must be a valid number.',
            'estimated_hours.min' => 'Estimated hours cannot be negative.',
            'start_date.date' => 'Start date must be a valid date.',
            'due_date.date' => 'Due date must be a valid date.',
            'due_date.after_or_equal' => 'Due date must be on or after the start date.',
            'completion_percentage.integer' => 'Completion percentage must be a whole number.',
            'completion_percentage.min' => 'Completion percentage cannot be less than 0.',
            'completion_percentage.max' => 'Completion percentage cannot be more than 100.',
            'deliverables.*.title.required_with' => 'Deliverable title is required.',
            'milestones.*.title.required_with' => 'Milestone title is required.',
            'milestones.*.due_date.required_with' => 'Milestone due date is required.',
            'risk_assessment.scope_clarity.between' => 'Scope clarity must be between 1 and 5.',
            'risk_assessment.client_experience.between' => 'Client experience must be between 1 and 5.',
            'risk_assessment.technical_complexity.between' => 'Technical complexity must be between 1 and 5.',
            'risk_assessment.timeline_pressure.between' => 'Timeline pressure must be between 1 and 5.',
            'risk_assessment.overall_risk.in' => 'Overall risk must be low, medium, or high.',
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

            // Validate that client belongs to the authenticated user
            if ($this->client_id) {
                $client = \App\Models\Client::find($this->client_id);
                if (!$client || $client->created_by !== auth()->user()->email) {
                    $validator->errors()->add(
                        'client_id',
                        'You can only create projects for your own clients.'
                    );
                }
            }
        });
    }
}
