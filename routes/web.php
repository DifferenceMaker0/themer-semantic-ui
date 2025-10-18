<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health', function () {
    return response()->json(['status' => 'OK'], 200);
});

Route::get('/ping', function () {
    return response('pong', 200);
});

Route::get('/blog', function (){
    return Inertia::render("blog");
})->name('blog');

Route::get('/blog/articles', function (){
    return Inertia::render("blog/articles/blog-articles");
})->name('blog.articles');

// Route::get('/blog/articles/{article}', function ($article) {
//     return Inertia::render("blog/articles/{$article}");
// })->name('blog.articles');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Project Management Routes
    Route::get('studio-manager', function () {
        return Inertia::render('studio-manager', [
            'projects' => [],
            'tasks' => [],
            'timeEntries' => [],
            'stats' => null
        ]);
    })->name('studioManager');

    Route::get('projects', function () {
        return Inertia::render('studio-manager/projects', [
            'projects' => [],
            'clients' => []
        ]);
    })->name('projects');

    Route::get('tasks', function () {
        return Inertia::render('studio-manager/tasks', [
            'tasks' => [],
            'projects' => []
        ]);
    })->name('tasks');

    Route::get('clients', function () {
        return Inertia::render('studio-manager/clients', [
            'clients' => []
        ]);
    })->name('clients');

    Route::get('time-tracking', function () {
        return Inertia::render('studio-manager/time-tracking', [
            'timeEntries' => [],
            'projects' => [],
            'tasks' => []
        ]);
    })->name('timeTracking');

    Route::get('communication', function () {
        return Inertia::render('studio-manager/communication', [
            'messages' => [],
            'channels' => []
        ]);
    })->name('communication');

    Route::get('financial-dashboard', function () {
        return Inertia::render('studio-manager/financial-dashboard', [
            'invoices' => [],
            'expenses' => [],
            'payments' => []
        ]);
    })->name('financialDashboard');

    Route::get('analytics', function () {
        return Inertia::render('studio-manager/analytics', [
            'projects' => [],
            'tasks' => [],
            'timeEntries' => []
        ]);
    })->name('analytics');

    Route::get('calendar', function () {
        return Inertia::render('studio-manager/calendar', [
            'events' => []
        ]);
    })->name('calendar');

    // Themer Dashboard Integration
    Route::get('themer-dashboard', function () {
        return Inertia::render('themeswitcher/themeswitcher');
    })->name('themer-dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
