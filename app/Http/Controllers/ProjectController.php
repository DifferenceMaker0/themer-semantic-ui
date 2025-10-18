<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Http\Resources\ProjectResource;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class ProjectController extends Controller
{

    /**
     * Display a listing of projects.
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Project::with(['client', 'tasks']);

            // Apply filters
            if ($request->has('status')) {
                $query->where('status', $request->status);
            }

            if ($request->has('priority')) {
                $query->where('priority', $request->priority);
            }

            if ($request->has('project_type')) {
                $query->where('project_type', $request->project_type);
            }

            if ($request->has('client_id')) {
                $query->where('client_id', $request->client_id);
            }

            if ($request->has('search')) {
                $search = $request->search;
                $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhere('description', 'like', "%{$search}%")
                      ->orWhereHas('client', function ($clientQuery) use ($search) {
                          $clientQuery->where('company_name', 'like', "%{$search}%");
                      });
                });
            }

            // Special filters
            if ($request->has('overdue') && $request->overdue) {
                $query->overdue();
            }

            // Sorting
            $sortBy = $request->get('sort_by', 'created_at');
            $sortOrder = $request->get('sort_order', 'desc');
            $query->orderBy($sortBy, $sortOrder);

            // Pagination
            $perPage = $request->get('per_page', 15);
            $projects = $query->paginate($perPage);

            return response()->json([
                'data' => ProjectResource::collection($projects->items()),
                'meta' => [
                    'current_page' => $projects->currentPage(),
                    'last_page' => $projects->lastPage(),
                    'per_page' => $projects->perPage(),
                    'total' => $projects->total(),
                ]
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching projects: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error fetching projects',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created project.
     */
    public function store(StoreProjectRequest $request): JsonResponse
    {
        try {
            $project = Project::create($request->validated());
            $project->load(['client', 'tasks']);

            return response()->json([
                'message' => 'Project created successfully',
                'data' => new ProjectResource($project)
            ], 201);

        } catch (\Exception $e) {
            Log::error('Error creating project: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error creating project',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified project.
     */
    public function show(Project $project): JsonResponse
    {
        try {
            // Load relationships
            $project->load(['client', 'tasks', 'timeEntries', 'invoices']);

            return response()->json([
                'data' => new ProjectResource($project)
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching project: ' . $e->getMessage());
            return response()->json([
                'message' => 'Project not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Update the specified project.
     */
    public function update(UpdateProjectRequest $request, Project $project): JsonResponse
    {
        try {
            $project->update($request->validated());
            $project->load(['client', 'tasks']);

            return response()->json([
                'message' => 'Project updated successfully',
                'data' => new ProjectResource($project->fresh())
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error updating project: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error updating project',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified project.
     */
    public function destroy(Project $project): JsonResponse
    {
        try {
            // Check if project has associated tasks or time entries
            if ($project->tasks()->count() > 0 || $project->timeEntries()->count() > 0) {
                return response()->json([
                    'message' => 'Cannot delete project with associated tasks or time entries'
                ], 422);
            }

            $project->delete();

            return response()->json([
                'message' => 'Project deleted successfully'
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error deleting project: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error deleting project',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get project statistics.
     */
    public function stats(): JsonResponse
    {
        try {
            $stats = [
                'total_projects' => Project::count(),
                'active_projects' => Project::active()->count(),
                'completed_projects' => Project::completed()->count(),
                'overdue_projects' => Project::overdue()->count(),
                'total_budget' => Project::sum('budget'),
                'average_completion' => Project::avg('completion_percentage'),
                'projects_by_status' => Project::selectRaw('status, COUNT(*) as count')
                    ->groupBy('status')
                    ->pluck('count', 'status'),
                'projects_by_priority' => Project::selectRaw('priority, COUNT(*) as count')
                    ->groupBy('priority')
                    ->pluck('count', 'priority'),
            ];

            return response()->json([
                'data' => $stats
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching project stats: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error fetching statistics',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Analyze project with AI for risk assessment.
     */
    public function analyze(Request $request, Project $project): JsonResponse
    {
        try {
            // This would integrate with the LLM service from SOURCE_ENTITIES
            // For now, return mock analysis
            $analysis = [
                'predicted_risk' => 'medium',
                'risk_factors' => [
                    'Timeline constraints',
                    'Technical complexity',
                    'Client communication requirements'
                ],
                'suggested_buffer_hours' => 20,
                'suggested_deadline' => now()->addDays(30)->format('Y-m-d'),
                'confidence_score' => 75,
                'market_insights' => 'Based on current market trends, similar projects typically require 15-25% buffer time.'
            ];

            // Update project with AI analysis
            $project->update(['ai_analysis' => $analysis]);

            return response()->json([
                'message' => 'Project analysis completed',
                'data' => $analysis
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error analyzing project: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error analyzing project',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
