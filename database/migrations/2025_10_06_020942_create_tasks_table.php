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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->foreignId('project_id')->constrained('projects')->onDelete('cascade');
            $table->foreignId('parent_task_id')->nullable()->constrained('tasks')->onDelete('cascade');
            $table->enum('status', ['todo', 'in_progress', 'review', 'completed'])->default('todo');
            $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium');
            $table->enum('priority_matrix', [
                'important_urgent', 'important_not_urgent', 
                'not_important_urgent', 'not_important_not_urgent'
            ])->nullable();
            $table->integer('estimated_hours')->nullable();
            $table->integer('actual_hours')->default(0);
            $table->enum('confidence_level', ['low', 'medium', 'high'])->default('medium');
            $table->date('due_date')->nullable();
            $table->date('start_date')->nullable();
            $table->date('completion_date')->nullable();
            $table->json('dependencies')->nullable();
            $table->json('tags')->nullable();
            $table->string('assignee')->nullable();
            $table->integer('order_index')->default(0);
            $table->boolean('is_critical_path')->default(false);
            $table->text('notes')->nullable();
            $table->json('attachments')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
