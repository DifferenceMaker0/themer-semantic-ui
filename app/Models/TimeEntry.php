<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class TimeEntry extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        'project_id',
        'description',
        'start_time',
        'end_time',
        'duration_minutes',
        'is_billable',
        'hourly_rate',
        'created_by'
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
        'duration_minutes' => 'integer',
        'is_billable' => 'boolean',
        'hourly_rate' => 'decimal:2',
    ];

    protected $attributes = [
        'is_billable' => true,
        'hourly_rate' => 0,
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

        // Auto-calculate duration if start and end times are provided
        static::saving(function ($model) {
            if ($model->start_time && $model->end_time && !$model->duration_minutes) {
                $model->duration_minutes = $model->start_time->diffInMinutes($model->end_time);
            }
        });
    }

    // Relationships
    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    // Scopes
    public function scopeBillable($query)
    {
        return $query->where('is_billable', true);
    }

    public function scopeNonBillable($query)
    {
        return $query->where('is_billable', false);
    }

    public function scopeByProject($query, $projectId)
    {
        return $query->where('project_id', $projectId);
    }

    public function scopeByTask($query, $taskId)
    {
        return $query->where('task_id', $taskId);
    }

    public function scopeByDateRange($query, $startDate, $endDate)
    {
        return $query->whereBetween('start_time', [$startDate, $endDate]);
    }

    public function scopeToday($query)
    {
        return $query->whereDate('start_time', today());
    }

    public function scopeThisWeek($query)
    {
        return $query->whereBetween('start_time', [
            now()->startOfWeek(),
            now()->endOfWeek()
        ]);
    }

    public function scopeThisMonth($query)
    {
        return $query->whereMonth('start_time', now()->month)
                    ->whereYear('start_time', now()->year);
    }

    // Accessors
    public function getHoursAttribute()
    {
        return round($this->duration_minutes / 60, 2);
    }

    public function getDateAttribute()
    {
        return $this->start_time->format('Y-m-d');
    }

    public function getBillableAttribute()
    {
        return $this->is_billable;
    }

    public function getTotalAmountAttribute()
    {
        if (!$this->is_billable || !$this->hourly_rate) {
            return 0;
        }
        return round(($this->duration_minutes / 60) * $this->hourly_rate, 2);
    }

    public function getIsRunningAttribute()
    {
        return $this->start_time && !$this->end_time;
    }

    public function getDurationFormattedAttribute()
    {
        $hours = floor($this->duration_minutes / 60);
        $minutes = $this->duration_minutes % 60;
        return sprintf('%02d:%02d', $hours, $minutes);
    }

    // Validation rules for API
    public static function validationRules()
    {
        return [
            'task_id' => 'nullable|exists:tasks,id',
            'project_id' => 'required|exists:projects,id',
            'description' => 'required|string|max:500',
            'start_time' => 'required|date',
            'end_time' => 'nullable|date|after:start_time',
            'duration_minutes' => 'nullable|integer|min:1',
            'is_billable' => 'nullable|boolean',
            'hourly_rate' => 'nullable|numeric|min:0',
        ];
    }

    // Helper methods
    public function stop()
    {
        if ($this->is_running) {
            $this->end_time = now();
            $this->duration_minutes = $this->start_time->diffInMinutes($this->end_time);
            $this->save();
        }
        return $this;
    }

    public function resume()
    {
        if (!$this->is_running) {
            // Create a new time entry for resuming
            return static::create([
                'task_id' => $this->task_id,
                'project_id' => $this->project_id,
                'description' => $this->description,
                'start_time' => now(),
                'is_billable' => $this->is_billable,
                'hourly_rate' => $this->hourly_rate,
            ]);
        }
        return $this;
    }

    public function updateDuration($minutes)
    {
        $this->duration_minutes = $minutes;
        if ($this->start_time) {
            $this->end_time = $this->start_time->copy()->addMinutes($minutes);
        }
        $this->save();
        return $this;
    }
}
