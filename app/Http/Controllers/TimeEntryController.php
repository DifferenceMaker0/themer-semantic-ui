<?php

namespace App\Http\Controllers;

use App\Models\TimeEntry;
use App\Http\Resources\TimeEntryResource;
use App\Http\Requests\StoreTimeEntryRequest;
use App\Http\Requests\UpdateTimeEntryRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class TimeEntryController extends Controller
{

    /**
     * Display a listing of time entries.
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = TimeEntry::with(['task', 'project']);

            // Apply filters
            if ($request->has('project_id')) {
                $query->where('project_id', $request->project_id);
            }

            if ($request->has('task_id')) {
                $query->where('task_id', $request->task_id);
            }

            if ($request->has('is_billable')) {
                $query->where('is_billable', $request->boolean('is_billable'));
            }

            if ($request->has('date_from') && $request->has('date_to')) {
                $query->byDateRange($request->date_from, $request->date_to);
            }

            if ($request->has('search')) {
                $search = $request->search;
                $query->where(function ($q) use ($search) {
                    $q->where('description', 'like', "%{$search}%")
                      ->orWhereHas('task', function ($taskQuery) use ($search) {
                          $taskQuery->where('title', 'like', "%{$search}%");
                      })
                      ->orWhereHas('project', function ($projectQuery) use ($search) {
                          $projectQuery->where('title', 'like', "%{$search}%");
                      });
                });
            }

            // Special filters
            if ($request->has('today') && $request->today) {
                $query->today();
            }

            if ($request->has('this_week') && $request->this_week) {
                $query->thisWeek();
            }

            if ($request->has('this_month') && $request->this_month) {
                $query->thisMonth();
            }

            if ($request->has('running') && $request->running) {
                $query->whereNull('end_time');
            }

            // Sorting
            $sortBy = $request->get('sort_by', 'start_time');
            $sortOrder = $request->get('sort_order', 'desc');
            $query->orderBy($sortBy, $sortOrder);

            // Pagination
            $perPage = $request->get('per_page', 15);
            $timeEntries = $query->paginate($perPage);

            return response()->json([
                'data' => TimeEntryResource::collection($timeEntries->items()),
                'meta' => [
                    'current_page' => $timeEntries->currentPage(),
                    'last_page' => $timeEntries->lastPage(),
                    'per_page' => $timeEntries->perPage(),
                    'total' => $timeEntries->total(),
                ]
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching time entries: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error fetching time entries',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created time entry.
     */
    public function store(StoreTimeEntryRequest $request): JsonResponse
    {
        try {
            $timeEntry = TimeEntry::create($request->validated());
            $timeEntry->load(['task', 'project']);

            return response()->json([
                'message' => 'Time entry created successfully',
                'data' => new TimeEntryResource($timeEntry)
            ], 201);

        } catch (\Exception $e) {
            Log::error('Error creating time entry: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error creating time entry',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified time entry.
     */
    public function show(TimeEntry $timeEntry): JsonResponse
    {
        try {
            // Load relationships
            $timeEntry->load(['task', 'project']);

            return response()->json([
                'data' => new TimeEntryResource($timeEntry)
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching time entry: ' . $e->getMessage());
            return response()->json([
                'message' => 'Time entry not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Update the specified time entry.
     */
    public function update(UpdateTimeEntryRequest $request, TimeEntry $timeEntry): JsonResponse
    {
        try {
            $timeEntry->update($request->validated());
            $timeEntry->load(['task', 'project']);

            return response()->json([
                'message' => 'Time entry updated successfully',
                'data' => new TimeEntryResource($timeEntry->fresh())
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error updating time entry: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error updating time entry',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified time entry.
     */
    public function destroy(TimeEntry $timeEntry): JsonResponse
    {
        try {
            $timeEntry->delete();

            return response()->json([
                'message' => 'Time entry deleted successfully'
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error deleting time entry: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error deleting time entry',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get time tracking statistics.
     */
    public function stats(): JsonResponse
    {
        try {
            $stats = [
                'total_entries' => TimeEntry::count(),
                'total_hours' => TimeEntry::sum('duration_minutes') / 60,
                'billable_hours' => TimeEntry::billable()->sum('duration_minutes') / 60,
                'non_billable_hours' => TimeEntry::nonBillable()->sum('duration_minutes') / 60,
                'total_revenue' => TimeEntry::billable()->get()->sum('total_amount'),
                'today_hours' => TimeEntry::today()->sum('duration_minutes') / 60,
                'this_week_hours' => TimeEntry::thisWeek()->sum('duration_minutes') / 60,
                'this_month_hours' => TimeEntry::thisMonth()->sum('duration_minutes') / 60,
                'running_entries' => TimeEntry::whereNull('end_time')->count(),
                'hours_by_project' => TimeEntry::with('project')
                    ->selectRaw('project_id, SUM(duration_minutes) as total_minutes')
                    ->groupBy('project_id')
                    ->get()
                    ->mapWithKeys(function ($item) {
                        return [
                            $item->project->title ?? 'Unknown' => round($item->total_minutes / 60, 2)
                        ];
                    }),
                'revenue_by_project' => TimeEntry::billable()->with('project')
                    ->get()
                    ->groupBy('project_id')
                    ->map(function ($entries) {
                        return [
                            'project' => $entries->first()->project->title ?? 'Unknown',
                            'revenue' => $entries->sum('total_amount')
                        ];
                    })
                    ->values(),
            ];

            return response()->json([
                'data' => $stats
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching time entry stats: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error fetching statistics',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Start a new time entry (timer).
     */
    public function start(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'project_id' => 'required|exists:projects,id',
                'task_id' => 'nullable|exists:tasks,id',
                'description' => 'required|string|max:500',
                'is_billable' => 'nullable|boolean',
                'hourly_rate' => 'nullable|numeric|min:0',
            ]);

            // Stop any running timers first
            TimeEntry::whereNull('end_time')->get()->each(function ($entry) {
                $entry->stop();
            });

            $timeEntry = TimeEntry::create([
                'project_id' => $request->project_id,
                'task_id' => $request->task_id,
                'description' => $request->description,
                'start_time' => now(),
                'is_billable' => $request->get('is_billable', true),
                'hourly_rate' => $request->get('hourly_rate', 0),
            ]);

            $timeEntry->load(['task', 'project']);

            return response()->json([
                'message' => 'Timer started successfully',
                'data' => new TimeEntryResource($timeEntry)
            ], 201);

        } catch (\Exception $e) {
            Log::error('Error starting timer: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error starting timer',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Stop a running time entry.
     */
    public function stop(TimeEntry $timeEntry): JsonResponse
    {
        try {
            if (!$timeEntry->is_running) {
                return response()->json([
                    'message' => 'Time entry is not running'
                ], 422);
            }

            $timeEntry->stop();
            $timeEntry->load(['task', 'project']);

            return response()->json([
                'message' => 'Timer stopped successfully',
                'data' => new TimeEntryResource($timeEntry)
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error stopping timer: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error stopping timer',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
