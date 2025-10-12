<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'company_name' => $this->company_name,
            'industry' => $this->industry,
            'company_size' => $this->company_size,
            'website' => $this->website,
            'primary_contact_name' => $this->primary_contact_name,
            'primary_contact_email' => $this->primary_contact_email,
            'primary_contact_phone' => $this->primary_contact_phone,
            'timezone' => $this->timezone,
            'communication_frequency' => $this->communication_frequency,
            'communication_style' => $this->communication_style,
            'business_hours_start' => $this->business_hours_start?->format('H:i'),
            'business_hours_end' => $this->business_hours_end?->format('H:i'),
            'total_revenue' => (float) $this->total_revenue,
            'satisfaction_score' => $this->satisfaction_score,
            'relationship_status' => $this->relationship_status,
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
            'created_by' => $this->created_by,
            
            // Computed attributes
            'full_contact_info' => $this->full_contact_info,
            'business_hours' => $this->business_hours,
            
            // Relationships (when loaded)
            'projects' => ProjectResource::collection($this->whenLoaded('projects')),
            'invoices' => InvoiceResource::collection($this->whenLoaded('invoices')),
            'messages' => MessageResource::collection($this->whenLoaded('messages')),
            
            // Counts (when loaded)
            'projects_count' => $this->when(
                $this->relationLoaded('projects'),
                fn() => $this->projects->count()
            ),
            'active_projects_count' => $this->when(
                $this->relationLoaded('projects'),
                fn() => $this->projects->where('status', 'active')->count()
            ),
            'total_project_value' => $this->when(
                $this->relationLoaded('projects'),
                fn() => $this->projects->sum('budget')
            ),
        ];
    }
}
