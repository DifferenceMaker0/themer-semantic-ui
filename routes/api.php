<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\PetResource;
use App\Models\Pet;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\PetController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TimeEntryController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SocialMediaPostController;

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('petstore')->group(function () { 
        // GET /api/petstore - Index (List all pets)
        Route::get('/', [PetController::class, 'index']); 
        // POST /api/petstore - Store (Create a new pet)
        Route::post('/', [PetController::class, 'store']); 
        // GET /api/petstore/{id} - Show (View details of one pet)
        Route::get('/{id}', [PetController::class, 'show']);
        // PUT /api/petstore/{id} - Update (Edit a pet)
        Route::put('/{id}', [PetController::class, 'update']); 
        // DELETE /api/petstore/{id} - Destroy (Delete a pet)
        Route::delete('/{id}', [PetController::class, 'destroy']); 
    });
});

// Themeswitcher API routes - Public access for demo purposes
// Note: These routes use inline CSRF token headers for POST operations
Route::group([], function () {
    // Petstore routes for themeswitcher (demo - public access)
    Route::resource('petstore', PetController::class);

    // Social Media Posts API routes (demo - public access)
    Route::apiResource('social-media-posts', SocialMediaPostController::class);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Studio Manager API Routes - Protected by Sanctum
Route::middleware('auth:sanctum')->group(function () {
    // Client Management
    Route::apiResource('clients', ClientController::class);
    Route::get('clients-stats', [ClientController::class, 'stats']);

    // Project Management
    Route::apiResource('projects', ProjectController::class);
    Route::get('projects-stats', [ProjectController::class, 'stats']);
    Route::post('projects/{project}/analyze', [ProjectController::class, 'analyze']);

    // Task Management
    Route::apiResource('tasks', TaskController::class);
    Route::get('tasks-stats', [TaskController::class, 'stats']);
    Route::post('tasks/update-order', [TaskController::class, 'updateOrder']);

    // Time Entry Management
    Route::apiResource('time-entries', TimeEntryController::class);
    Route::get('time-entries-stats', [TimeEntryController::class, 'stats']);
    Route::post('time-entries/start', [TimeEntryController::class, 'start']);
    Route::post('time-entries/{timeEntry}/stop', [TimeEntryController::class, 'stop']);
});


