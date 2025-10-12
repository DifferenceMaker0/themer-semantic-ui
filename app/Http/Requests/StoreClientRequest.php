<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreClientRequest extends FormRequest
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
            'company_name' => 'required|string|max:255',
            'industry' => 'nullable|string|max:255',
            'company_size' => 'nullable|in:startup,small,medium,large',
            'website' => 'nullable|url|max:255',
            'primary_contact_name' => 'required|string|max:255',
            'primary_contact_email' => 'nullable|email|max:255',
            'primary_contact_phone' => 'nullable|string|max:20',
            'timezone' => 'nullable|string|max:50',
            'communication_frequency' => 'nullable|in:daily,weekly,biweekly,monthly',
            'communication_style' => 'nullable|in:professional,friendly,casual,formal',
            'business_hours_start' => 'nullable|date_format:H:i',
            'business_hours_end' => 'nullable|date_format:H:i',
            'total_revenue' => 'nullable|numeric|min:0',
            'satisfaction_score' => 'nullable|integer|min:1|max:10',
            'relationship_status' => 'nullable|in:active,inactive,prospect',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'company_name.required' => 'Company name is required.',
            'primary_contact_name.required' => 'Primary contact name is required.',
            'primary_contact_email.email' => 'Please provide a valid email address.',
            'website.url' => 'Please provide a valid website URL.',
            'company_size.in' => 'Company size must be one of: startup, small, medium, large.',
            'communication_frequency.in' => 'Communication frequency must be one of: daily, weekly, biweekly, monthly.',
            'communication_style.in' => 'Communication style must be one of: professional, friendly, casual, formal.',
            'business_hours_start.date_format' => 'Business hours start must be in HH:MM format.',
            'business_hours_end.date_format' => 'Business hours end must be in HH:MM format.',
            'satisfaction_score.between' => 'Satisfaction score must be between 1 and 10.',
            'relationship_status.in' => 'Relationship status must be one of: active, inactive, prospect.',
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
            if ($this->business_hours_start && $this->business_hours_end) {
                $start = strtotime($this->business_hours_start);
                $end = strtotime($this->business_hours_end);
                
                if ($start >= $end) {
                    $validator->errors()->add(
                        'business_hours_end',
                        'Business hours end must be after business hours start.'
                    );
                }
            }
        });
    }
}
