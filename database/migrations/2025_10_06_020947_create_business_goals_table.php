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
        Schema::create('business_goals', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('goal_type', [
                'revenue', 'profit', 'billable_hours', 'new_clients', 
                'project_count', 'efficiency', 'client_satisfaction'
            ]);
            $table->decimal('target_value', 15, 2);
            $table->decimal('current_value', 15, 2)->default(0);
            $table->enum('unit', ['currency', 'hours', 'percentage', 'count'])->nullable();
            $table->enum('period', ['weekly', 'monthly', 'quarterly', 'yearly']);
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('priority', ['low', 'medium', 'high', 'critical'])->default('medium');
            $table->enum('category', ['financial', 'productivity', 'growth', 'client_relations'])->nullable();
            $table->json('milestones')->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('achieved')->default(false);
            $table->date('achieved_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('business_goals');
    }
};
