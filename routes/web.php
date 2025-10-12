<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Project Management Routes
    Route::get('project-dashboard', function () {
        return Inertia::render('project-dashboard', [
            'projects' => [],
            'tasks' => [],
            'timeEntries' => [],
            'stats' => null
        ]);
    })->name('project-dashboard');

    Route::get('projects', function () {
        return Inertia::render('projects', [
            'projects' => [],
            'clients' => []
        ]);
    })->name('projects');

    Route::get('tasks', function () {
        return Inertia::render('tasks', [
            'tasks' => [],
            'projects' => []
        ]);
    })->name('tasks');

    Route::get('clients', function () {
        return Inertia::render('clients', [
            'clients' => []
        ]);
    })->name('clients');

    Route::get('time-tracking', function () {
        return Inertia::render('time-tracking', [
            'timeEntries' => [],
            'projects' => [],
            'tasks' => []
        ]);
    })->name('time-tracking');

    Route::get('communication', function () {
        return Inertia::render('communication', [
            'messages' => [],
            'channels' => []
        ]);
    })->name('communication');

    Route::get('financial-dashboard', function () {
        return Inertia::render('financial-dashboard', [
            'invoices' => [],
            'expenses' => [],
            'payments' => []
        ]);
    })->name('financial-dashboard');

    Route::get('analytics', function () {
        return Inertia::render('analytics', [
            'projects' => [],
            'tasks' => [],
            'timeEntries' => []
        ]);
    })->name('analytics');

    Route::get('calendar', function () {
        return Inertia::render('calendar', [
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
