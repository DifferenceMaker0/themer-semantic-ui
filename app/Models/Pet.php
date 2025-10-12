<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pet extends Model
{
    use HasFactory;
    
    /**
     * Defines the Many-to-Many relationship with Tag using the custom TagPivot model.
     * * FIX: We explicitly pass 'pet_kind' as the pivot table name (2nd argument) 
     * because it deviates from Eloquent's default 'pet_tag' naming convention.
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'pet_kind', 'pet_id', 'tag_id')
                    ->using(TagPivot::class)
                    ->withPivot('kinds');
    }
    
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'age',
        'species',
    ];
}
