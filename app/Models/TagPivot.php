<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class TagPivot extends Pivot
{
    /**
     * Define the pivot table name explicitly as it's not conventional (pet_tag).
     */
    protected $table = 'pet_kind';
    
    /**
     * Indicates if the IDs are auto-incrementing.
     */
    public $incrementing = true;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        // This 'kinds' attribute holds data specific to the relationship (e.g., dog breeds, colors).
        'kinds' => 'array',
    ];
}