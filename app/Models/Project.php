<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'client_id',
        'project_type',
        'status',
        'priority',
        'budget',
        'estimated_hours',
        'actual_hours',
        'start_date',
        'due_date',
        'completion_date',
        'completion_percentage',
        'deliverables',
        'milestones',
        'risk_assessment',
        'ai_analysis',
        'client_access_enabled',
        'notes',
        'created_by'
    ];

    protected $casts = [
        'deliverables' => 'array',
        'milestones' => 'array',
        'risk_assessment' => 'array',
        'ai_analysis' => 'array',
        'start_date' => 'date',
        'due_date' => 'date',
        'completion_date' => 'date',
        'budget' => 'decimal:2',
        'estimated_hours' => 'decimal:2',
        'actual_hours' => 'decimal:2',
        'completion_percentage' => 'integer',
        'client_access_enabled' => 'boolean',
    ];

    protected $attributes = [
        'status' => 'planning',
        'priority' => 'medium',
        'completion_percentage' => 0,
        'actual_hours' => 0,
        'client_access_enabled' => false,
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
    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function timeEntries()
    {
        return $this->hasMany(TimeEntry::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    public function scopeByPriority($query, $priority)
    {
        return $query->where('priority', $priority);
    }

    public function scopeByClient($query, $clientId)
    {
        return $query->where('client_id', $clientId);
    }

    public function scopeOverdue($query)
    {
        return $query->where('due_date', '<', now())
                    ->whereNotIn('status', ['completed', 'cancelled']);
    }

    // Accessors
    public function getProgressStatusAttribute()
    {
        if ($this->completion_percentage >= 100) {
            return 'completed';
        } elseif ($this->completion_percentage >= 75) {
            return 'nearly_complete';
        } elseif ($this->completion_percentage >= 25) {
            return 'in_progress';
        } else {
            return 'just_started';
        }
    }

    public function getIsOverdueAttribute()
    {
        return $this->due_date && 
               $this->due_date->isPast() && 
               !in_array($this->status, ['completed', 'cancelled']);
    }

    public function getDaysUntilDueAttribute()
    {
        if (!$this->due_date) return null;
        return now()->diffInDays($this->due_date, false);
    }

    public function getTotalBudgetUsedAttribute()
    {
        return $this->timeEntries()
                   ->where('is_billable', true)
                   ->sum(\DB::raw('duration_minutes * hourly_rate / 60'));
    }

    public function getBudgetRemainingAttribute()
    {
        if (!$this->budget) return null;
        return $this->budget - $this->total_budget_used;
    }

    // Validation rules for API
    public static function validationRules()
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
            'milestones' => 'nullable|array',
            'risk_assessment' => 'nullable|array',
            'ai_analysis' => 'nullable|array',
            'client_access_enabled' => 'nullable|boolean',
            'notes' => 'nullable|string',
        ];
    }
}
