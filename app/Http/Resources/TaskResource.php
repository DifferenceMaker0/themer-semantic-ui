<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
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
            'project_id' => $this->project_id,
            'parent_task_id' => $this->parent_task_id,
            'status' => $this->status,
            'priority' => $this->priority,
            'priority_matrix' => $this->priority_matrix,
            'estimated_hours' => (float) $this->estimated_hours,
            'actual_hours' => (float) $this->actual_hours,
            'confidence_level' => $this->confidence_level,
            'due_date' => $this->due_date?->format('Y-m-d'),
            'start_date' => $this->start_date?->format('Y-m-d'),
            'completion_date' => $this->completion_date?->format('Y-m-d'),
            'dependencies' => $this->dependencies,
            'tags' => $this->tags,
            'assignee' => $this->assignee,
            'order_index' => $this->order_index,
            'is_critical_path' => $this->is_critical_path,
            'notes' => $this->notes,
            'attachments' => $this->attachments,
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
            'created_by' => $this->created_by,
            
            // Computed attributes
            'is_overdue' => $this->is_overdue,
            'days_until_due' => $this->days_until_due,
            'progress_percentage' => $this->progress_percentage,
            'total_time_logged' => $this->total_time_logged,
            'hours_remaining' => $this->hours_remaining,
            'subtasks_completed' => $this->subtasks_completed,
            
            // Relationships (when loaded)
            'project' => new ProjectResource($this->whenLoaded('project')),
            'parent_task' => new TaskResource($this->whenLoaded('parentTask')),
            'subtasks' => TaskResource::collection($this->whenLoaded('subtasks')),
            'time_entries' => TimeEntryResource::collection($this->whenLoaded('timeEntries')),
            
            // Counts (when loaded)
            'subtasks_count' => $this->when(
                $this->relationLoaded('subtasks'),
                fn() => $this->subtasks->count()
            ),
            'time_entries_count' => $this->when(
                $this->relationLoaded('timeEntries'),
                fn() => $this->timeEntries->count()
            ),
        ];
    }
}
