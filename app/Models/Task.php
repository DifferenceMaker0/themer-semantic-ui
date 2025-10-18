<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'project_id',
        'parent_task_id',
        'status',
        'priority',
        'priority_matrix',
        'estimated_hours',
        'actual_hours',
        'confidence_level',
        'due_date',
        'start_date',
        'completion_date',
        'dependencies',
        'tags',
        'assignee',
        'order_index',
        'is_critical_path',
        'notes',
        'attachments',
        'created_by'
    ];

    protected $casts = [
        'dependencies' => 'array',
        'tags' => 'array',
        'attachments' => 'array',
        'due_date' => 'date',
        'start_date' => 'date',
        'completion_date' => 'date',
        'estimated_hours' => 'decimal:2',
        'actual_hours' => 'decimal:2',
        'order_index' => 'integer',
        'is_critical_path' => 'boolean',
    ];

    protected $attributes = [
        'status' => 'todo',
        'priority' => 'medium',
        'actual_hours' => 0,
        'order_index' => 0,
        'is_critical_path' => false,
    ];

    // Row Level Security - Only show records created by the authenticated user
    protected static function booted()
    {
        static::addGlobalScope('user_scope', function (Builder $builder) {
            if (Auth::check()) {
                $builder->where('created_by', Auth::user()->email);
            }
        });

        static::creating(function ($model) {
            if (Auth::check()) {
                $model->created_by = Auth::user()->email;
            }
        });
    }

    // Relationships
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function parentTask()
    {
        return $this->belongsTo(Task::class, 'parent_task_id');
    }

    public function subtasks()
    {
        return $this->hasMany(Task::class, 'parent_task_id');
    }

    public function timeEntries()
    {
        return $this->hasMany(TimeEntry::class);
    }

    // Scopes
    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    public function scopeByPriority($query, $priority)
    {
        return $query->where('priority', $priority);
    }

    public function scopeByProject($query, $projectId)
    {
        return $query->where('project_id', $projectId);
    }

    public function scopeOverdue($query)
    {
        return $query->where('due_date', '<', now())
                    ->where('status', '!=', 'completed');
    }

    public function scopeRootTasks($query)
    {
        return $query->whereNull('parent_task_id');
    }

    public function scopeCriticalPath($query)
    {
        return $query->where('is_critical_path', true);
    }

    // Accessors
    public function getIsOverdueAttribute()
    {
        return $this->due_date && 
               $this->due_date->isPast() && 
               $this->status !== 'completed';
    }

    public function getDaysUntilDueAttribute()
    {
        if (!$this->due_date) return null;
        return now()->diffInDays($this->due_date, false);
    }

    public function getProgressPercentageAttribute()
    {
        if ($this->status === 'completed') return 100;
        if ($this->status === 'in_progress') return 50;
        if ($this->status === 'review') return 75;
        return 0;
    }

    public function getTotalTimeLoggedAttribute()
    {
        return $this->timeEntries->sum('duration_minutes') / 60;
    }

    public function getHoursRemainingAttribute()
    {
        if (!$this->estimated_hours) return null;
        return max(0, $this->estimated_hours - $this->total_time_logged);
    }

    public function getSubtasksCompletedAttribute()
    {
        $total = $this->subtasks->count();
        if ($total === 0) return null;
        
        $completed = $this->subtasks->where('status', 'completed')->count();
        return round(($completed / $total) * 100);
    }

    // Validation rules for API
    public static function validationRules()
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
        ];
    }
}
