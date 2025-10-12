import type { Event as EventType } from '@/types';

export class Event {
  static async findAll(): Promise<EventType[]> {
    // Mock implementation - replace with actual API call
    return [
      {
        id: '1',
        title: 'Client Meeting - Project Kickoff',
        description: 'Initial project discussion and requirements gathering',
        start_time: '2024-01-16T10:00:00Z',
        end_time: '2024-01-16T11:00:00Z',
        all_day: false,
        location: 'Conference Room A',
        attendees: ['john@acme.com', 'sarah@techstart.com'],
        project_id: 'project-1',
        client_id: 'client-1',
        event_type: 'meeting',
        status: 'scheduled',
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-15T10:00:00Z',
      },
      {
        id: '2',
        title: 'Project Deadline - Phase 1',
        description: 'First phase deliverables due',
        start_time: '2024-01-30T23:59:00Z',
        end_time: '2024-01-30T23:59:00Z',
        all_day: true,
        project_id: 'project-1',
        event_type: 'deadline',
        status: 'scheduled',
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-15T10:00:00Z',
      },
      {
        id: '3',
        title: 'Weekly Team Standup',
        description: 'Weekly team sync meeting',
        start_time: '2024-01-17T09:00:00Z',
        end_time: '2024-01-17T09:30:00Z',
        all_day: false,
        location: 'Virtual - Zoom',
        event_type: 'meeting',
        status: 'scheduled',
        recurrence: {
          frequency: 'weekly',
          interval: 1,
          end_date: '2024-12-31',
        },
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-15T10:00:00Z',
      },
    ];
  }

  static async findById(id: string): Promise<EventType | null> {
    // Mock implementation - replace with actual API call
    const events = await this.findAll();
    return events.find(event => event.id === id) || null;
  }

  static async create(eventData: Partial<EventType>): Promise<EventType> {
    // Mock implementation - replace with actual API call
    const newEvent: EventType = {
      id: Math.random().toString(36).substr(2, 9),
      title: eventData.title || '',
      start_time: eventData.start_time || new Date().toISOString(),
      end_time: eventData.end_time || new Date().toISOString(),
      all_day: eventData.all_day || false,
      event_type: eventData.event_type || 'other',
      status: 'scheduled',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...eventData,
    };
    return newEvent;
  }

  static async update(id: string, eventData: Partial<EventType>): Promise<EventType> {
    // Mock implementation - replace with actual API call
    const existingEvent = await this.findById(id);
    if (!existingEvent) {
      throw new Error('Event not found');
    }
    
    return {
      ...existingEvent,
      ...eventData,
      updated_at: new Date().toISOString(),
    };
  }

  static async delete(id: string): Promise<boolean> {
    // Mock implementation - replace with actual API call
    return true;
  }

  static async getUpcomingEvents(days: number = 7): Promise<EventType[]> {
    const events = await this.findAll();
    const now = new Date();
    const futureDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
    
    return events.filter(event => {
      const eventDate = new Date(event.start_time);
      return eventDate >= now && eventDate <= futureDate && event.status === 'scheduled';
    });
  }

  static async getEventsByProject(projectId: string): Promise<EventType[]> {
    const events = await this.findAll();
    return events.filter(event => event.project_id === projectId);
  }

  static async getEventsByClient(clientId: string): Promise<EventType[]> {
    const events = await this.findAll();
    return events.filter(event => event.client_id === clientId);
  }

  static async getEventsByType(eventType: EventType['event_type']): Promise<EventType[]> {
    const events = await this.findAll();
    return events.filter(event => event.event_type === eventType);
  }
}
