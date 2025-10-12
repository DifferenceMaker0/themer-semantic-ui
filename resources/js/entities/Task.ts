import type { Task as TaskType } from '@/types';

export class Task {
  static async findAll(): Promise<TaskType[]> {
    // Mock implementation - replace with actual API call
    return [
      {
        id: '1',
        title: 'Design Homepage Layout',
        description: 'Create wireframes and mockups for the new homepage design',
        project_id: 'project-1',
        status: 'in_progress',
        priority: 'high',
        priority_matrix: 'important_urgent',
        estimated_hours: 8,
        actual_hours: 5,
        confidence_level: 'high',
        due_date: '2024-01-20',
        start_date: '2024-01-15',
        assignee: 'john.doe@example.com',
        tags: ['design', 'frontend', 'homepage'],
        order_index: 1,
        is_critical_path: true,
        notes: 'Focus on mobile-first approach',
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-15T10:00:00Z',
      },
      {
        id: '2',
        title: 'Implement User Authentication',
        description: 'Set up login, registration, and password reset functionality',
        project_id: 'project-1',
        parent_task_id: null,
        status: 'todo',
        priority: 'medium',
        priority_matrix: 'important_not_urgent',
        estimated_hours: 12,
        confidence_level: 'medium',
        due_date: '2024-01-25',
        assignee: 'jane.smith@example.com',
        tags: ['backend', 'authentication', 'security'],
        dependencies: ['1'],
        order_index: 2,
        is_critical_path: false,
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-15T10:00:00Z',
      },
      {
        id: '3',
        title: 'Write API Documentation',
        description: 'Document all API endpoints with examples and response formats',
        project_id: 'project-2',
        status: 'completed',
        priority: 'low',
        priority_matrix: 'not_important_not_urgent',
        estimated_hours: 6,
        actual_hours: 7,
        confidence_level: 'high',
        due_date: '2024-01-18',
        start_date: '2024-01-16',
        completion_date: '2024-01-18',
        assignee: 'bob.wilson@example.com',
        tags: ['documentation', 'api'],
        order_index: 1,
        is_critical_path: false,
        notes: 'Include Postman collection',
        created_at: '2024-01-16T09:00:00Z',
        updated_at: '2024-01-18T16:30:00Z',
      },
    ];
  }

  static async findById(id: string): Promise<TaskType | null> {
    // Mock implementation - replace with actual API call
    return null;
  }

  static async findByProjectId(projectId: string): Promise<TaskType[]> {
    // Mock implementation - replace with actual API call
    return [];
  }

  static async findByUserId(userId: string): Promise<TaskType[]> {
    // Mock implementation - replace with actual API call
    return [];
  }



  static async create(taskData: Partial<TaskType>): Promise<TaskType> {
    // Mock implementation - replace with actual API call
    const newTask: TaskType = {
      id: Math.random().toString(36).substr(2, 9),
      title: taskData.title || '',
      description: taskData.description || '',
      project_id: taskData.project_id || '',
      status: taskData.status || 'todo',
      priority: taskData.priority || 'medium',
      estimated_hours: taskData.estimated_hours || 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...taskData,
    };
    return newTask;
  }

  static async update(id: string, taskData: Partial<TaskType>): Promise<TaskType> {
    // Mock implementation - replace with actual API call
    const existingTask = await this.findById(id);
    if (!existingTask) {
      throw new Error('Task not found');
    }

    return {
      ...existingTask,
      ...taskData,
      updated_at: new Date().toISOString(),
    };
  }

  static async delete(id: string): Promise<boolean> {
    // Mock implementation - replace with actual API call
    return true;
  }

  static async filter(filters: any, sortBy?: string): Promise<TaskType[]> {
    // Mock implementation - replace with actual API call
    const allTasks = await this.findAll();
    return allTasks; // In real implementation, apply filters and sorting
  }

  static async findByProject(projectId: string): Promise<TaskType[]> {
    const allTasks = await this.findAll();
    return allTasks.filter(task => task.project_id === projectId);
  }

  static async findByStatus(status: TaskType['status']): Promise<TaskType[]> {
    const allTasks = await this.findAll();
    return allTasks.filter(task => task.status === status);
  }

  static async findByPriority(priority: TaskType['priority']): Promise<TaskType[]> {
    const allTasks = await this.findAll();
    return allTasks.filter(task => task.priority === priority);
  }

  static async findOverdue(): Promise<TaskType[]> {
    const allTasks = await this.findAll();
    const now = new Date();
    return allTasks.filter(task =>
      task.due_date &&
      new Date(task.due_date) < now &&
      task.status !== 'completed'
    );
  }

  static async findDueToday(): Promise<TaskType[]> {
    const allTasks = await this.findAll();
    const today = new Date().toDateString();
    return allTasks.filter(task =>
      task.due_date &&
      new Date(task.due_date).toDateString() === today
    );
  }
}
