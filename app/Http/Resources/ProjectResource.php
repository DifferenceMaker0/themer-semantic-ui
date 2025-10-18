<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'client_id' => $this->client_id,
            'project_type' => $this->project_type,
            'status' => $this->status,
            'priority' => $this->priority,
            'budget' => (float) $this->budget,
            'estimated_hours' => (float) $this->estimated_hours,
            'actual_hours' => (float) $this->actual_hours,
            'start_date' => $this->start_date?->format('Y-m-d'),
            'due_date' => $this->due_date?->format('Y-m-d'),
            'completion_date' => $this->completion_date?->format('Y-m-d'),
            'completion_percentage' => $this->completion_percentage,
            'deliverables' => $this->deliverables,
            'milestones' => $this->milestones,
            'risk_assessment' => $this->risk_assessment,
            'ai_analysis' => $this->ai_analysis,
            'client_access_enabled' => $this->client_access_enabled,
            'notes' => $this->notes,
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
            'created_by' => $this->created_by,
            
            // Computed attributes
            'progress_status' => $this->progress_status,
            'is_overdue' => $this->is_overdue,
            'days_until_due' => $this->days_until_due,
            'total_budget_used' => $this->total_budget_used,
            'budget_remaining' => $this->budget_remaining,
            
            // Relationships (when loaded)
            'client' => new ClientResource($this->whenLoaded('client')),
            'tasks' => TaskResource::collection($this->whenLoaded('tasks')),
            'time_entries' => TimeEntryResource::collection($this->whenLoaded('timeEntries')),
            'invoices' => InvoiceResource::collection($this->whenLoaded('invoices')),
            
            // Counts (when loaded)
            'tasks_count' => $this->when(
                $this->relationLoaded('tasks'),
                fn() => $this->tasks->count()
            ),
            'completed_tasks_count' => $this->when(
                $this->relationLoaded('tasks'),
                fn() => $this->tasks->where('status', 'completed')->count()
            ),
            'total_time_logged' => $this->when(
                $this->relationLoaded('timeEntries'),
                fn() => $this->timeEntries->sum('duration_minutes') / 60
            ),
            'billable_time_logged' => $this->when(
                $this->relationLoaded('timeEntries'),
                fn() => $this->timeEntries->where('is_billable', true)->sum('duration_minutes') / 60
            ),
        ];
    }
}
