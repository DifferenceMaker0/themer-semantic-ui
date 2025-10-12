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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('industry')->nullable();
            $table->enum('company_size', ['startup', 'small', 'medium', 'large'])->nullable();
            $table->string('website')->nullable();
            $table->string('primary_contact_name');
            $table->string('primary_contact_email')->nullable();
            $table->string('primary_contact_phone')->nullable();
            $table->string('timezone')->nullable();
            $table->enum('communication_frequency', ['daily', 'weekly', 'biweekly', 'monthly'])->nullable();
            $table->enum('communication_style', ['professional', 'friendly', 'casual', 'formal'])->nullable();
            $table->time('business_hours_start')->nullable();
            $table->time('business_hours_end')->nullable();
            $table->decimal('total_revenue', 10, 2)->default(0);
            $table->integer('satisfaction_score')->default(8);
            $table->enum('relationship_status', ['active', 'inactive', 'prospect'])->default('prospect');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
