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
        Schema::create('email_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('category', [
                'project_update', 'proposal', 'invoice', 'follow_up', 
                'thank_you', 'meeting_request', 'check_in', 'other'
            ]);
            $table->string('subject');
            $table->longText('content');
            $table->enum('tone', ['professional', 'friendly', 'casual', 'formal', 'urgent'])->default('professional');
            $table->integer('use_count')->default(0);
            $table->boolean('is_active')->default(true);
            $table->json('placeholders')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('email_templates');
    }
};
