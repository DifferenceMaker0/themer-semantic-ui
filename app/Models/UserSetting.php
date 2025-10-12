<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'user_type',
        'theme',
        'settings',
        'session_id'
    ];

    protected $casts = [
        'settings' => 'array'
    ];

    /**
     * Get the user that owns the setting
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Scope for user type
     */
    public function scopeForUserType($query, string $userType)
    {
        return $query->where('user_type', $userType);
    }

    /**
     * Scope for authenticated users
     */
    public function scopeForUser($query, int $userId)
    {
        return $query->where('user_id', $userId);
    }

    /**
     * Scope for guest users by session
     */
    public function scopeForSession($query, string $sessionId)
    {
        return $query->where('session_id', $sessionId);
    }

    /**
     * Get default settings structure
     */
    public static function getDefaultSettings(): array
    {
        return [
            'theme' => 'light',
            'settings' => [
                'sidebar_collapsed' => false,
                'notifications_enabled' => true,
                'auto_save' => true,
                'language' => 'en',
                'timezone' => 'UTC'
            ]
        ];
    }

    /**
     * Get settings for a specific user type and identifier
     */
    public static function getForUserType(string $userType, $identifier = null): ?self
    {
        $query = static::forUserType($userType);

        switch ($userType) {
            case 'user':
            case 'admin':
                if ($identifier) {
                    $query->forUser($identifier);
                }
                break;
            case 'guest':
                if ($identifier) {
                    $query->forSession($identifier);
                }
                break;
        }

        return $query->first();
    }

    /**
     * Create or update settings for a user type
     */
    public static function updateForUserType(string $userType, array $data, $identifier = null): self
    {
        $attributes = ['user_type' => $userType];

        switch ($userType) {
            case 'user':
            case 'admin':
                if ($identifier) {
                    $attributes['user_id'] = $identifier;
                }
                break;
            case 'guest':
                if ($identifier) {
                    $attributes['session_id'] = $identifier;
                }
                break;
        }

        return static::updateOrCreate($attributes, $data);
    }
}
