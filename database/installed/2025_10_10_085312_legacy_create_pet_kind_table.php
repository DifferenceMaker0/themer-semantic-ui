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
            $table->foreignId('pet_id')->constrained()->onDelete('cascade');
            $table->foreignId('kind_id')->constrained()->onDelete('cascade');
            $table->enum('kind', ['dog', 'cat', 'fish', 'bird', 'reptile'])->nullable(); 
            $table->primary(['pet_id', 'kind_id', 'kind']);
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
