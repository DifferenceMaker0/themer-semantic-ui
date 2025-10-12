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
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->enum('report_type', [
                'kpi_dashboard', 'financial', 'project_performance', 
                'client_analysis', 'productivity', 'custom'
            ]);
            $table->json('chart_types')->nullable();
            $table->json('data_sources');
            $table->json('date_range')->nullable();
            $table->json('filters')->nullable();
            $table->json('schedule')->nullable();
            $table->json('config')->nullable();
            $table->boolean('is_favorite')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
