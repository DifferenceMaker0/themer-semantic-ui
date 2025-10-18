<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;

class SocialMediaPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'platform',
        'hashtags',
        'template_name',
        'tone',
        'created_by'
    ];

    protected $casts = [
        'hashtags' => 'array',
    ];

    /**
     * Boot the model and add global scope for user isolation
     */
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
}
