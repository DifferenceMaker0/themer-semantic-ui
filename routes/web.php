<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\PetController;
use App\Http\Resources\PetstoreResource;
 
Route::get('themer', function () {
    return Inertia::render('themeswitcher/themeswitcher');
})->name('themer');

Route::get('theme-dashboard', function () {
    return Inertia::render('themeswitcher/dashboard');
})->name('theme-dashboard');

Route::get('petstore', function () {
    // Fetch initial pet data from the database to pass to React component
    $pets = \App\Models\Pet::with('tags')->orderBy('id', 'asc')->get();

    // Transform the data using the PetResource and convert to array
    $petsData = \App\Http\Resources\PetstoreResource::collection($pets)->resolve();

    // Debug: Log what we're passing to React
    \Log::info('Petstore route - pets data:', ['pets' => $petsData, 'type' => gettype($petsData), 'is_array' => is_array($petsData)]);

    return Inertia::render('petstore-api', [
        'pets' => $petsData
    ]);
})->name('petstore');

Route::get('people', function () {
    return Inertia::render('cshop/notable-people');
})->name('people');

Route::get('bunghole', function () {
    return Inertia::render('bunghole');
})->name('bunghole');

Route::get('cshop', function () {
    return Inertia::render('cshop/index');
})->name('cshop');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/docs', function () {
    return Inertia::render('documentation');
});



Route::get('/docs/{path?}', function ($path = 'index') {
    $fullPath = public_path("docs/{$path}.html");
// 1. Ensure the file exists (prevents arbitrary file reading)
    if (!File::exists($fullPath)) {
        abort(404);
    }
// 2. Get the content of the static HTML file
    $htmlContent = File::get($fullPath);
// 3. Pass the content to the Inertia page
    return Inertia::render('Docs/Documentation', [
        'docHtml' => $htmlContent,
        'docPath' => $path, // Pass the path for client-side use
    ]);
})->where('path', '.*');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
