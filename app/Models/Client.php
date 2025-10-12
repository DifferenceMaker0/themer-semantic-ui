<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_name',
        'industry',
        'company_size',
        'website',
        'primary_contact_name',
        'primary_contact_email',
        'primary_contact_phone',
        'timezone',
        'communication_frequency',
        'communication_style',
        'business_hours_start',
        'business_hours_end',
        'total_revenue',
        'satisfaction_score',
        'relationship_status',
        'created_by'
    ];

    protected $casts = [
        'total_revenue' => 'decimal:2',
        'satisfaction_score' => 'integer',
        'business_hours_start' => 'datetime:H:i',
        'business_hours_end' => 'datetime:H:i',
    ];

    protected $attributes = [
        'total_revenue' => 0,
        'satisfaction_score' => 8,
        'relationship_status' => 'prospect',
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
    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }

    public function documents()
    {
        return $this->hasMany(ClientDocument::class);
    }

    public function notes()
    {
        return $this->hasMany(ClientNote::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('relationship_status', 'active');
    }

    public function scopeProspects($query)
    {
        return $query->where('relationship_status', 'prospect');
    }

    public function scopeByCompanySize($query, $size)
    {
        return $query->where('company_size', $size);
    }

    // Accessors
    public function getFullContactInfoAttribute()
    {
        $info = $this->primary_contact_name;
        if ($this->primary_contact_email) {
            $info .= ' (' . $this->primary_contact_email . ')';
        }
        return $info;
    }

    public function getBusinessHoursAttribute()
    {
        if ($this->business_hours_start && $this->business_hours_end) {
            return $this->business_hours_start . ' - ' . $this->business_hours_end;
        }
        return null;
    }

    // Validation rules for API
    public static function validationRules()
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
}
