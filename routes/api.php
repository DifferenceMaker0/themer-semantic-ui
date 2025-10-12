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

Route::prefix('petstore')->group(function () {
    // GET /api/petstore - Index (List all pets)
    Route::get('/', [PetController::class, 'index']);

    // POST /api/petstore - Store (Create a new pet)
    Route::post('/', [PetController::class, 'store']);

    // GET /api/petstore/{id} - Show (View details of one pet)
    Route::get('/{id}', [PetController::class, 'show']);
});

Route::resource('petstore', PetController::class);

// Settings API routes
Route::prefix('settings')->group(function () {
    Route::get('/', [App\Http\Controllers\SettingsController::class, 'index']);
    Route::put('/', [App\Http\Controllers\SettingsController::class, 'update']);
    Route::post('/reset', [App\Http\Controllers\SettingsController::class, 'reset']);
    Route::get('/bootstrap', [App\Http\Controllers\SettingsController::class, 'bootstrap']);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Studio Manager API Routes - Protected by Sanctum
Route::middleware('auth:sanctum')->group(function () {
    // Client Management
    Route::apiResource('clients', ClientController::class);
    Route::get('clients-stats', [ClientController::class, 'stats']);
});
