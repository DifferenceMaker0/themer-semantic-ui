<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pet_kind', function (Blueprint $table) {
            $table->id(); // Simple primary key for better relational integrity
            
            // Foreign key referencing the pets table
            $table->foreignId('pet_id')->constrained()->onDelete('cascade');
            
            // Foreign key referencing the new tags table (the model is Tag, so we use tag_id)
            $table->foreignId('tag_id')->constrained()->onDelete('cascade');
            
            // This column is named 'kinds' and set to JSON to match your Kind model's cast and the Pet model's withPivot('kinds') call.
            $table->json('kinds')->nullable(); 
            
            // Ensures a pet can only have a specific tag once
            $table->unique(['pet_id', 'tag_id']); 
        });
    } 
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pet_kind');
    }
};
