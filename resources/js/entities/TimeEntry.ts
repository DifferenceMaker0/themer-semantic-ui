import type { TimeEntry as TimeEntryType } from '@/types';

export class TimeEntry {
  static async findAll(): Promise<TimeEntryType[]> {
    // Mock implementation - replace with actual API call
    return [
      {
        id: '1',
        task_id: 'task-1',
        project_id: 'project-1',
        description: 'Frontend development work',
        start_time: '2024-01-15T09:00:00Z',
        end_time: '2024-01-15T12:00:00Z',
        duration_minutes: 180,
        is_billable: true,
        hours: 3, // computed from duration_minutes
        date: '2024-01-15', // computed from start_time
        billable: true, // alias for is_billable
        hourly_rate: 75,
        created_at: '2024-01-15T12:00:00Z',
        updated_at: '2024-01-15T12:00:00Z',
      },
      {
        id: '2',
        task_id: 'task-2',
        project_id: 'project-1',
        description: 'Code review and testing',
        start_time: '2024-01-15T14:00:00Z',
        end_time: '2024-01-15T16:30:00Z',
        duration_minutes: 150,
        is_billable: true,
        hours: 2.5, // computed from duration_minutes
        date: '2024-01-15', // computed from start_time
        billable: true, // alias for is_billable
        hourly_rate: 75,
        created_at: '2024-01-15T16:30:00Z',
        updated_at: '2024-01-15T16:30:00Z',
      },
    ];
  }

  static async findById(id: string): Promise<TimeEntryType | null> {
    // Mock implementation - replace with actual API call
    return null;
  }

  static async findByProjectId(projectId: string): Promise<TimeEntryType[]> {
    // Mock implementation - replace with actual API call
    return [];
  }

  static async findByUserId(userId: string): Promise<TimeEntryType[]> {
    // Mock implementation - replace with actual API call
    return [];
  }

  static async findThisWeek(userId?: string): Promise<TimeEntryType[]> {
    // Mock implementation - replace with actual API call
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6));

    const allEntries = await this.findAll();
    return allEntries.filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= startOfWeek && entryDate <= endOfWeek;
    });
  }

  static async getTotalHoursThisWeek(userId?: string): Promise<number> {
    const entries = await this.findThisWeek(userId);
    return entries.reduce((total, entry) => total + entry.hours, 0);
  }

  static async create(entryData: Partial<TimeEntryType>): Promise<TimeEntryType> {
    // Mock implementation - replace with actual API call
    const newEntry: TimeEntryType = {
      id: Math.random().toString(36).substr(2, 9),
      project_id: entryData.project_id || '',
      user_id: entryData.user_id || '',
      description: entryData.description || '',
      hours: entryData.hours || 0,
      date: entryData.date || new Date().toISOString(),
      billable: entryData.billable || true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...entryData,
    };
    return newEntry;
  }

  static async update(id: string, entryData: Partial<TimeEntryType>): Promise<TimeEntryType> {
    // Mock implementation - replace with actual API call
    const existingEntry = await this.findById(id);
    if (!existingEntry) {
      throw new Error('Time entry not found');
    }

    return {
      ...existingEntry,
      ...entryData,
      updated_at: new Date().toISOString(),
    };
  }

  static async delete(id: string): Promise<boolean> {
    // Mock implementation - replace with actual API call
    return true;
  }
}
