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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->foreignId('client_id')->constrained('clients')->onDelete('cascade');
            $table->enum('project_type', [
                'web_design', 'web_development', 'mobile_app', 'content_writing', 
                'copywriting', 'seo', 'social_media', 'consulting', 'branding', 
                'ui_ux_design', 'e_commerce', 'maintenance', 'other'
            ]);
            $table->enum('status', ['planning', 'active', 'on_hold', 'completed', 'cancelled'])->default('planning');
            $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium');
            $table->decimal('budget', 10, 2)->nullable();
            $table->integer('estimated_hours')->nullable();
            $table->integer('actual_hours')->default(0);
            $table->date('start_date')->nullable();
            $table->date('due_date')->nullable();
            $table->date('completion_date')->nullable();
            $table->integer('completion_percentage')->default(0);
            $table->json('deliverables')->nullable();
            $table->json('milestones')->nullable();
            $table->json('risk_assessment')->nullable();
            $table->json('ai_analysis')->nullable();
            $table->boolean('client_access_enabled')->default(false);
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
