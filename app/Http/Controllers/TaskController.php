<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Resources\TaskResource;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class TaskController extends Controller
{

    /**
     * Display a listing of tasks.
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Task::with(['project', 'parentTask', 'subtasks', 'timeEntries']);

            // Apply filters
            if ($request->has('status')) {
                $query->where('status', $request->status);
            }

            if ($request->has('priority')) {
                $query->where('priority', $request->priority);
            }

            if ($request->has('project_id')) {
                $query->where('project_id', $request->project_id);
            }

            if ($request->has('assignee')) {
                $query->where('assignee', $request->assignee);
            }

            if ($request->has('search')) {
                $search = $request->search;
                $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhere('description', 'like', "%{$search}%")
                      ->orWhereHas('project', function ($projectQuery) use ($search) {
                          $projectQuery->where('title', 'like', "%{$search}%");
                      });
                });
            }

            // Special filters
            if ($request->has('overdue') && $request->overdue) {
                $query->overdue();
            }

            if ($request->has('root_tasks_only') && $request->root_tasks_only) {
                $query->rootTasks();
            }

            if ($request->has('critical_path') && $request->critical_path) {
                $query->criticalPath();
            }

            // Sorting
            $sortBy = $request->get('sort_by', 'created_at');
            $sortOrder = $request->get('sort_order', 'desc');
            $query->orderBy($sortBy, $sortOrder);

            // Pagination
            $perPage = $request->get('per_page', 15);
            $tasks = $query->paginate($perPage);

            return response()->json([
                'data' => TaskResource::collection($tasks->items()),
                'meta' => [
                    'current_page' => $tasks->currentPage(),
                    'last_page' => $tasks->lastPage(),
                    'per_page' => $tasks->perPage(),
                    'total' => $tasks->total(),
                ]
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching tasks: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error fetching tasks',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created task.
     */
    public function store(StoreTaskRequest $request): JsonResponse
    {
        try {
            $task = Task::create($request->validated());
            $task->load(['project', 'parentTask', 'subtasks']);

            return response()->json([
                'message' => 'Task created successfully',
                'data' => new TaskResource($task)
            ], 201);

        } catch (\Exception $e) {
            Log::error('Error creating task: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error creating task',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified task.
     */
    public function show(Task $task): JsonResponse
    {
        try {
            // Load relationships
            $task->load(['project', 'parentTask', 'subtasks', 'timeEntries']);

            return response()->json([
                'data' => new TaskResource($task)
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching task: ' . $e->getMessage());
            return response()->json([
                'message' => 'Task not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Update the specified task.
     */
    public function update(UpdateTaskRequest $request, Task $task): JsonResponse
    {
        try {
            $task->update($request->validated());
            $task->load(['project', 'parentTask', 'subtasks']);

            return response()->json([
                'message' => 'Task updated successfully',
                'data' => new TaskResource($task->fresh())
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error updating task: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error updating task',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified task.
     */
    public function destroy(Task $task): JsonResponse
    {
        try {
            // Check if task has subtasks or time entries
            if ($task->subtasks()->count() > 0) {
                return response()->json([
                    'message' => 'Cannot delete task with subtasks. Please delete subtasks first.'
                ], 422);
            }

            if ($task->timeEntries()->count() > 0) {
                return response()->json([
                    'message' => 'Cannot delete task with time entries. Please remove time entries first.'
                ], 422);
            }

            $task->delete();

            return response()->json([
                'message' => 'Task deleted successfully'
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error deleting task: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error deleting task',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get task statistics.
     */
    public function stats(): JsonResponse
    {
        try {
            $stats = [
                'total_tasks' => Task::count(),
                'completed_tasks' => Task::byStatus('completed')->count(),
                'in_progress_tasks' => Task::byStatus('in_progress')->count(),
                'overdue_tasks' => Task::overdue()->count(),
                'critical_path_tasks' => Task::criticalPath()->count(),
                'average_completion_time' => Task::whereNotNull('completion_date')
                    ->selectRaw('AVG(DATEDIFF(completion_date, start_date)) as avg_days')
                    ->value('avg_days'),
                'tasks_by_status' => Task::selectRaw('status, COUNT(*) as count')
                    ->groupBy('status')
                    ->pluck('count', 'status'),
                'tasks_by_priority' => Task::selectRaw('priority, COUNT(*) as count')
                    ->groupBy('priority')
                    ->pluck('count', 'priority'),
                'tasks_by_project' => Task::with('project')
                    ->selectRaw('project_id, COUNT(*) as count')
                    ->groupBy('project_id')
                    ->get()
                    ->mapWithKeys(function ($item) {
                        return [$item->project->title ?? 'Unknown' => $item->count];
                    }),
            ];

            return response()->json([
                'data' => $stats
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error fetching task stats: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error fetching statistics',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update task order for Kanban board.
     */
    public function updateOrder(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'tasks' => 'required|array',
                'tasks.*.id' => 'required|exists:tasks,id',
                'tasks.*.order_index' => 'required|integer|min:0',
                'tasks.*.status' => 'nullable|in:todo,in_progress,review,completed',
            ]);

            foreach ($request->tasks as $taskData) {
                $task = Task::find($taskData['id']);
                if ($task) {
                    $updateData = ['order_index' => $taskData['order_index']];
                    if (isset($taskData['status'])) {
                        $updateData['status'] = $taskData['status'];
                    }
                    $task->update($updateData);
                }
            }

            return response()->json([
                'message' => 'Task order updated successfully'
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error updating task order: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error updating task order',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
