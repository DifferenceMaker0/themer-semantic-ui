<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class UserController extends Controller
{
    public function show(User $user)
    {
        return Inertia::render('User/Show', [
          'user' => $user->only(
            'id',
            'name',
            'email',
          ),
        ]);
    }
}