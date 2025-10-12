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
        Schema::create('meeting_records', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('client_id')->constrained('clients')->onDelete('cascade');
            $table->foreignId('project_id')->nullable()->constrained('projects')->onDelete('set null');
            $table->enum('meeting_type', ['consultation', 'project_review', 'check_in', 'presentation', 'workshop', 'other']);
            $table->enum('platform', ['zoom', 'google_meet', 'teams', 'in_person', 'phone', 'other'])->nullable();
            $table->dateTime('scheduled_start');
            $table->dateTime('scheduled_end');
            $table->dateTime('actual_start')->nullable();
            $table->dateTime('actual_end')->nullable();
            $table->json('attendees')->nullable();
            $table->text('agenda')->nullable();
            $table->longText('notes')->nullable();
            $table->json('action_items')->nullable();
            $table->string('recording_url')->nullable();
            $table->longText('transcript')->nullable();
            $table->json('ai_summary')->nullable();
            $table->enum('status', ['scheduled', 'completed', 'cancelled', 'no_show'])->default('scheduled');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meeting_records');
    }
};
