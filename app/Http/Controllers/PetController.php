<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Pet; // Import the Pet Model
use App\Http\Resources\PetstoreResource; // Import the Pet Resource
use App\Http\Resources\TagResource; // Required for PetstoreResource compilation
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class PetController extends Controller
{
    /**
     * Display a listing of the resources (Index Route).
     * GET /api/petstore
     * Fetches all pets from the MySQL database with eager-loaded tags.
     * * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */  
    public function index()
    {
        // Fetch ALL pets from the database, eager-load the 'tags' relationship
        // This query uses the DB credentials defined in your .env file.
        $pets = Pet::with('tags')->orderBy('id', 'asc')->get();
        
        // Return the collection using the PetstoreResource
        return PetstoreResource::collection($pets); 
    }

    /**
     * Store a newly created resource (Store Route).
     * POST /api/petstore?name=...&age=...
     * Expects data via URL Query Parameters as per prior request.
     * * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        // 1. Validation targeting URL query parameters (Matching Pet Model fillable: name, age, species)
        $validator = Validator::make($request->query(), [
            'name' => 'required|string|max:255',
            'age' => 'required|integer|min:1',
            'species' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation Failed',
                'errors' => $validator->errors()
            ], 422); 
        }

        // 2. Data Persistence (Using Eloquent ORM to interact with MySQL)
        try {
            $newPet = Pet::create($request->query());

            // Reload the resource, loading tags (will be an empty collection initially)
            $newPet->load('tags');

            // 3. Successful JSON Response (201 Created) using PetstoreResource
            return response()->json([
                'message' => 'Pet successfully registered.',
                'data' => new PetstoreResource($newPet)
            ], 201);
            
        } catch (\Exception $e) {
            \Log::error('Pet Store Error: ' . $e->getMessage());
            return response()->json([
                'message' => 'Internal server error during pet creation.',
                'error' => 'Database operation failed. Ensure your migrations are run and tables exist.'
            ], 500); 
        } 
    }

    /**
     * Display the specified resource (Show Route).
     * GET /api/petstore/{id}
     * * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        try {
            // 1. Find the resource from database with eager-loaded tags
            $pet = Pet::with('tags')->find($id);

            if (!$pet) {
                return response()->json([
                    'message' => 'Pet not found.'
                ], 404); // HTTP 404 Not Found
            }

            // 2. Successful JSON Response (200 OK) using PetstoreResource
            return response()->json([
                'message' => 'Pet details retrieved.',
                'data' => new PetstoreResource($pet)
            ]);

        } catch (\Exception $e) {
            \Log::error('Pet Show Error: ' . $e->getMessage());
            return response()->json([
                'message' => 'Internal server error while retrieving pet.',
                'error' => 'Database operation failed.'
            ], 500);
        }
    }
}