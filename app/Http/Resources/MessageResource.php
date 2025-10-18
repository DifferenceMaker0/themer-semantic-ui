<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
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
            'channel_id' => $this->channel_id,
            'client_id' => $this->client_id,
            'project_id' => $this->project_id,
            'external_id' => $this->external_id,
            'thread_id' => $this->thread_id,
            'subject' => $this->subject,
            'content' => $this->content,
            'sender_email' => $this->sender_email,
            'sender_name' => $this->sender_name,
            'recipient_email' => $this->recipient_email,
            'recipient_name' => $this->recipient_name,
            'message_type' => $this->message_type,
            'priority' => $this->priority,
            'category' => $this->category,
            'status' => $this->status,
            'is_flagged' => $this->is_flagged,
            'attachments' => $this->attachments ? json_decode($this->attachments, true) : null,
            'ai_analysis' => $this->ai_analysis ? json_decode($this->ai_analysis, true) : null,
            'scheduled_send_time' => $this->scheduled_send_time?->format('Y-m-d H:i:s'),
            'tracking_data' => $this->tracking_data ? json_decode($this->tracking_data, true) : null,
            'sent_at' => $this->sent_at?->format('Y-m-d H:i:s'),
            'received_at' => $this->received_at?->format('Y-m-d H:i:s'),
            'created_at' => $this->created_at?->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at?->format('Y-m-d H:i:s'),

            // Relationships (when loaded)
            'client' => new ClientResource($this->whenLoaded('client')),
            'project' => new ProjectResource($this->whenLoaded('project')),
        ];
    }
}
