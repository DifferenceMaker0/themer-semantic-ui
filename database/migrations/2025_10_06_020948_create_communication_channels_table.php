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
        Schema::create('communication_channels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('channel_type', [
                'email', 'sms', 'whatsapp', 'slack', 'teams', 
                'linkedin', 'twitter', 'facebook', 'discord'
            ]);
            $table->string('provider');
            $table->boolean('is_active')->default(true);
            $table->enum('connection_status', ['connected', 'disconnected', 'error', 'pending'])->default('pending');
            $table->dateTime('last_sync')->nullable();
            $table->json('settings')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('communication_channels');
    }
};
