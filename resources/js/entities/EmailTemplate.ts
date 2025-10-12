export interface EmailTemplateType {
    id: string;
    name: string;
    subject: string;
    body: string;
    category: string;
    variables: string[];
    created_at: string;
    updated_at: string;
}

export class EmailTemplate {
    static async findAll(): Promise<EmailTemplateType[]> {
        // Mock implementation - replace with actual API call
        return this.getDefaultTemplates();
    }

    static async list(): Promise<EmailTemplateType[]> {
        return this.findAll();
    }

    static async findByCategory(category: string): Promise<EmailTemplateType[]> {
        const allTemplates = await this.findAll();
        return allTemplates.filter(template => template.category === category);
    }

    static async findByName(name: string): Promise<EmailTemplateType | null> {
        const allTemplates = await this.findAll();
        return allTemplates.find(template => template.name === name) || null;
    }

    static getDefaultTemplates(): EmailTemplateType[] {
        return [
            {
                id: '1',
                name: 'Project Welcome',
                subject: 'Welcome to {{project_name}}',
                body: 'Dear {{client_name}},\n\nWelcome to your new project: {{project_name}}.\n\nBest regards,\n{{sender_name}}',
                category: 'project',
                variables: ['project_name', 'client_name', 'sender_name'],
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                id: '2',
                name: 'Task Update',
                subject: 'Task Update: {{task_name}}',
                body: 'Hi {{client_name}},\n\nTask "{{task_name}}" has been updated.\n\nStatus: {{task_status}}\n\nBest regards,\n{{sender_name}}',
                category: 'task',
                variables: ['task_name', 'client_name', 'task_status', 'sender_name'],
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            }
        ];
    }
}
