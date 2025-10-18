<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TimeEntryResource extends JsonResource
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
            'task_id' => $this->task_id,
            'project_id' => $this->project_id,
            'description' => $this->description,
            'start_time' => $this->start_time?->toISOString(),
            'end_time' => $this->end_time?->toISOString(),
            'duration_minutes' => $this->duration_minutes,
            'is_billable' => $this->is_billable,
            'hourly_rate' => (float) $this->hourly_rate,
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
            'created_by' => $this->created_by,
            
            // Computed attributes
            'hours' => $this->hours,
            'date' => $this->date,
            'billable' => $this->billable,
            'total_amount' => $this->total_amount,
            'is_running' => $this->is_running,
            'duration_formatted' => $this->duration_formatted,
            
            // Relationships (when loaded)
            'task' => new TaskResource($this->whenLoaded('task')),
            'project' => new ProjectResource($this->whenLoaded('project')),
        ];
    }
}
