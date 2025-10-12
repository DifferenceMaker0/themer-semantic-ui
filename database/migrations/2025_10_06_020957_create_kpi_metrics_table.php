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
        Schema::create('kpi_metrics', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->enum('metric_type', [
                'revenue', 'profit_margin', 'billable_utilization', 'client_satisfaction',
                'project_delivery', 'invoice_collection', 'client_retention'
            ]);
            $table->decimal('current_value', 15, 2);
            $table->decimal('previous_value', 15, 2)->nullable();
            $table->decimal('target_value', 15, 2)->nullable();
            $table->enum('unit', ['currency', 'percentage', 'hours', 'count', 'score']);
            $table->enum('status', ['excellent', 'good', 'warning', 'critical'])->nullable();
            $table->enum('trend', ['up', 'down', 'stable'])->nullable();
            $table->enum('calculation_period', ['daily', 'weekly', 'monthly', 'quarterly', 'yearly'])->nullable();
            $table->dateTime('last_calculated')->nullable();
            $table->integer('display_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kpi_metrics');
    }
};
