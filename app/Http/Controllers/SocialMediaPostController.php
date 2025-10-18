<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Models\SocialMediaPost;

class SocialMediaPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        try {
            $posts = SocialMediaPost::orderBy('created_at', 'desc')->get();

            return response()->json([
                'success' => true,
                'data' => $posts
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching social media posts: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error fetching posts'
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'content' => 'required|string|max:5000',
            'platform' => 'required|string|max:255',
            'hashtags' => 'sometimes|array',
            'hashtags.*' => 'string|max:100',
            'template_name' => 'nullable|string|max:255',
            'tone' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $post = SocialMediaPost::create($request->validated());

            return response()->json([
                'success' => true,
                'data' => $post,
                'message' => 'Post saved successfully'
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error creating social media post: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error saving post'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        try {
            $post = SocialMediaPost::findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $post
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Post not found'
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'content' => 'sometimes|string|max:5000',
            'platform' => 'sometimes|string|max:255',
            'hashtags' => 'sometimes|array',
            'hashtags.*' => 'string|max:100',
            'template_name' => 'nullable|string|max:255',
            'tone' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $post = SocialMediaPost::findOrFail($id);
            $post->update($request->validated());

            return response()->json([
                'success' => true,
                'data' => $post,
                'message' => 'Post updated successfully'
            ]);
        } catch (\Exception $e) {
            Log::error('Error updating social media post: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error updating post'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        try {
            $post = SocialMediaPost::findOrFail($id);
            $post->delete();

            return response()->json([
                'success' => true,
                'message' => 'Post deleted successfully'
            ]);
        } catch (\Exception $e) {
            Log::error('Error deleting social media post: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error deleting post'
            ], 500);
        }
    }
}
