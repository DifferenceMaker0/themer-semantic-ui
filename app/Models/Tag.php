<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Tag Model: Required to support the Pet model's tags() relationship.
 */
class Tag extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
    ];
}
