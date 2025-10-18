<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Http\Resources\ClientResource;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class ClientController extends Controller
{
    /**
     * Display a listing of clients.
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Client::query();

            // Apply filters
            if ($request->has('relationship_status')) {
                $query->where('relationship_status', $request->relationship_status);
            }

            if ($request->has('company_size')) {
                $query->where('company_size', $request->company_size);
            }

            if ($request->has('search')) {
                $search = $request->search;
                $query->where(function ($q) use ($search) {
                    $q->where('company_name', 'like', "%{$search}%")
                      ->orWhere('primary_contact_name', 'like', "%{$search}%")
                      ->orWhere('industry', 'like', "%{$search}%");
                });
            }

            // Sorting
            $sortBy = $request->get('sort_by', 'company_name');
            $sortOrder = $request->get('sort_order', 'asc');
            $query->orderBy($sortBy, $sortOrder);

            // Pagination
            $perPage = $request->get('per_page', 15);
            $clients = $query->paginate($perPage);

            return response()->json([
                'data' => ClientResource::collection($clients->items()),
                'meta' => [
                    'current_page' => $clients->currentPage(),
                    'last_page' => $clients->lastPage(),
                    'per_page' => $clients->perPage(),
                    'total' => $clients->total(),
                ]
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching clients: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error fetching clients',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created client.
     */
    public function store(StoreClientRequest $request): JsonResponse
    {
        try {
            $client = Client::create($request->validated());

            return response()->json([
                'message' => 'Client created successfully',
                'data' => new ClientResource($client)
            ], 201);

        } catch (\Exception $e) {
            Log::error('Error creating client: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error creating client',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified client.
     */
    public function show(Client $client): JsonResponse
    {
        try {
            // Load relationships
            $client->load(['projects', 'invoices']);

            return response()->json([
                'data' => new ClientResource($client)
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching client: ' . $e->getMessage());
            return response()->json([
                'message' => 'Client not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Update the specified client.
     */
    public function update(UpdateClientRequest $request, Client $client): JsonResponse
    {
        try {
            $client->update($request->validated());

            return response()->json([
                'message' => 'Client updated successfully',
                'data' => new ClientResource($client->fresh())
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error updating client: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error updating client',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified client.
     */
    public function destroy(Client $client): JsonResponse
    {
        try {
            // Check if client has associated projects
            if ($client->projects()->count() > 0) {
                return response()->json([
                    'message' => 'Cannot delete client with associated projects'
                ], 422);
            }

            $client->delete();

            return response()->json([
                'message' => 'Client deleted successfully'
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error deleting client: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error deleting client',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get client statistics.
     */
    public function stats(): JsonResponse
    {
        try {
            $stats = [
                'total_clients' => Client::count(),
                'active_clients' => Client::active()->count(),
                'prospects' => Client::prospects()->count(),
                'total_revenue' => Client::sum('total_revenue'),
                'average_satisfaction' => Client::avg('satisfaction_score'),
            ];

            return response()->json([
                'data' => $stats
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching client stats: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error fetching statistics',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
