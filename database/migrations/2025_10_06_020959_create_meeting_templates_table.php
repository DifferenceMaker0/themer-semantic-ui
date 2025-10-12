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
        Schema::create('meeting_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('duration_minutes');
            $table->integer('buffer_before_minutes')->default(0);
            $table->integer('buffer_after_minutes')->default(15);
            $table->string('default_title')->nullable();
            $table->text('default_description')->nullable();
            $table->enum('default_event_type', ['meeting', 'focus_time', 'personal'])->default('meeting');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meeting_templates');
    }
};
