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
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('channel_id')->constrained('communication_channels')->onDelete('cascade');
            $table->foreignId('client_id')->nullable()->constrained('clients')->onDelete('set null');
            $table->foreignId('project_id')->nullable()->constrained('projects')->onDelete('set null');
            $table->string('external_id')->nullable();
            $table->string('thread_id')->nullable();
            $table->string('subject')->nullable();
            $table->text('content');
            $table->string('sender_email')->nullable();
            $table->string('sender_name')->nullable();
            $table->string('recipient_email')->nullable();
            $table->string('recipient_name')->nullable();
            $table->enum('message_type', ['incoming', 'outgoing', 'draft']);
            $table->enum('priority', ['urgent', 'high', 'normal', 'low'])->default('normal');
            $table->enum('category', ['project', 'administrative', 'promotional', 'support', 'social', 'other'])->nullable();
            $table->enum('status', ['unread', 'read', 'replied', 'archived'])->default('unread');
            $table->boolean('is_flagged')->default(false);
            $table->json('attachments')->nullable();
            $table->json('ai_analysis')->nullable();
            $table->dateTime('scheduled_send_time')->nullable();
            $table->json('tracking_data')->nullable();
            $table->dateTime('sent_at')->nullable();
            $table->dateTime('received_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
