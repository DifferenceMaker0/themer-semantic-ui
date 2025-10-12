// Base entity types
export interface BaseEntity {
  id: string;
  created_at: string;
  updated_at: string;
  created_by?: string;
}

// User types
export interface User extends BaseEntity {
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'client';
}

// Client types (updated from schema)
export interface Client extends BaseEntity {
  company_name: string;
  industry?: string;
  company_size?: 'startup' | 'small' | 'medium' | 'large';
  website?: string;
  primary_contact_name: string;
  primary_contact_email?: string;
  primary_contact_phone?: string;
  timezone?: string;
  communication_frequency?: 'daily' | 'weekly' | 'biweekly' | 'monthly';
  communication_style?: 'professional' | 'friendly' | 'casual' | 'formal';
  business_hours_start?: string;
  business_hours_end?: string;
  total_revenue?: number;
  satisfaction_score?: number;
  relationship_status?: 'active' | 'inactive' | 'prospect';
}

// Project types
export type ProjectType =
  | 'web_design'
  | 'web_development'
  | 'mobile_app'
  | 'content_writing'
  | 'copywriting'
  | 'seo'
  | 'social_media'
  | 'consulting'
  | 'branding'
  | 'ui_ux_design'
  | 'e_commerce'
  | 'maintenance'
  | 'other';

export type ProjectStatus = 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled';
export type Priority = 'low' | 'medium' | 'high';
export type RiskLevel = 'low' | 'medium' | 'high';

export interface RiskAssessment {
  scope_clarity: number;
  client_experience: number;
  technical_complexity: number;
  timeline_pressure: number;
  overall_risk: RiskLevel;
}

export interface AIAnalysis {
  predicted_risk: RiskLevel;
  risk_factors: string[];
  suggested_buffer_hours: number;
  suggested_deadline: string;
  confidence_score: number;
  market_insights?: string;
}

export interface Deliverable {
  title: string;
  description?: string;
  completed: boolean;
  due_date?: string;
}

export interface Milestone {
  title: string;
  description?: string;
  due_date: string;
  completed: boolean;
  completion_date?: string;
}

export interface Project extends BaseEntity {
  title: string;
  description?: string;
  client_id: string;
  project_type: ProjectType;
  status: ProjectStatus;
  priority: Priority;
  budget?: number;
  estimated_hours?: number;
  actual_hours?: number;
  start_date?: string;
  due_date?: string;
  completion_date?: string;
  completion_percentage?: number;
  deliverables?: Deliverable[];
  milestones?: Milestone[];
  risk_assessment?: RiskAssessment;
  ai_analysis?: AIAnalysis;
  client_access_enabled?: boolean;
  notes?: string;
}

// Task types (updated from schema)
export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'completed';
export type PriorityMatrix = 'important_urgent' | 'important_not_urgent' | 'not_important_urgent' | 'not_important_not_urgent';
export type ConfidenceLevel = 'low' | 'medium' | 'high';

export interface TaskAttachment {
  name: string;
  url: string;
  type: string;
}

export interface Task extends BaseEntity {
  title: string;
  description?: string;
  project_id: string;
  parent_task_id?: string;
  status: TaskStatus;
  priority: Priority;
  priority_matrix?: PriorityMatrix;
  estimated_hours?: number;
  actual_hours?: number;
  confidence_level?: ConfidenceLevel;
  due_date?: string;
  start_date?: string;
  completion_date?: string;
  dependencies?: string[];
  tags?: string[];
  assignee?: string;
  order_index?: number;
  is_critical_path?: boolean;
  notes?: string;
  attachments?: TaskAttachment[];
  dependencies?: string[];
  subtasks?: SubTask[];
}

export interface SubTask {
  id: string;
  title: string;
  description: string;
  estimated_hours: number;
  completed: boolean;
}

// Time Entry types (updated from schema)
export interface TimeEntry extends BaseEntity {
  task_id: string;
  project_id: string;
  description?: string;
  start_time: string;
  end_time: string;
  duration_minutes: number;
  is_billable: boolean;
  // Computed properties for compatibility
  hours: number; // computed from duration_minutes
  date: string; // computed from start_time
  billable: boolean; // alias for is_billable
  hourly_rate?: number;
}

// Message and Communication types (updated from schema)
export type MessageType = 'incoming' | 'outgoing' | 'draft';
export type MessageStatus = 'unread' | 'read' | 'replied' | 'forwarded' | 'archived' | 'deleted';
export type MessageCategory = 'project' | 'administrative' | 'promotional' | 'support' | 'social' | 'other';
export type MessagePriority = 'urgent' | 'high' | 'normal' | 'low';
export type Sentiment = 'positive' | 'neutral' | 'negative';

export interface MessageAttachment {
  filename: string;
  file_url: string;
  file_size: number;
  mime_type: string;
}

export interface MessageAIAnalysis {
  sentiment: Sentiment;
  urgency_score: number;
  key_topics: string[];
  action_items: string[];
  suggested_response?: string;
  client_satisfaction_indicator?: number;
}

export interface MessageTrackingData {
  opened: boolean;
  opened_at?: string;
  clicked_links: string[];
  click_count: number;
}

export interface Message extends BaseEntity {
  channel_id: string;
  client_id?: string;
  project_id?: string;
  external_id?: string;
  thread_id?: string;
  subject?: string;
  content: string;
  sender_email?: string;
  sender_name?: string;
  recipient_email?: string;
  recipient_name?: string;
  message_type: MessageType;
  priority: MessagePriority;
  category?: MessageCategory;
  status: MessageStatus;
  is_flagged: boolean;
  attachments?: MessageAttachment[];
  ai_analysis?: MessageAIAnalysis;
  scheduled_send_time?: string;
  tracking_data?: MessageTrackingData;
  sent_at?: string;
  received_at?: string;
}

// Invoice and Financial types (updated from schema)
export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue';

export interface Invoice extends BaseEntity {
  invoice_number: string;
  client_id: string;
  project_id?: string;
  status: InvoiceStatus;
  issue_date: string;
  due_date: string;
  total_amount: number;
  paid_amount: number;
}

export interface Expense extends BaseEntity {
  title: string;
  amount: number;
  category: string;
  date: string;
  project_id?: string;
}

// Audit types
export interface ProjectAudit extends BaseEntity {
  project_id: string;
  user_id: string;
  action: string;
  details: Record<string, any>;
  timestamp: string;
}

// Component prop types
export interface LayoutProps {
  children: React.ReactNode;
  currentPageName: string;
}

export interface NavigationItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Form and UI types
export interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export interface SelectOption {
  value: string;
  label: string;
}

// API and Integration types
export interface LLMRequest {
  prompt: string;
  add_context_from_internet?: boolean;
  response_json_schema?: Record<string, any>;
}

export interface LLMResponse {
  [key: string]: any;
}

// Statistics and Dashboard types
export interface DashboardStats {
  activeProjects: number;
  dueToday: number;
  hoursThisWeek: number;
}

export interface ProjectStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalRevenue: number;
  totalHours: number;
}

// Filter and Search types
export interface TaskFilters {
  status?: TaskStatus[];
  priority?: Priority[];
  project_id?: string;
  assigned_to?: string;
  due_date_range?: {
    start: string;
    end: string;
  };
}

export interface ProjectFilters {
  status?: ProjectStatus[];
  client_id?: string;
  project_type?: ProjectType[];
  priority?: Priority[];
}

// New entity types from schemas
export interface BusinessGoal extends BaseEntity {
  title: string;
  description?: string;
  goal_type: 'revenue' | 'profit' | 'billable_hours' | 'new_clients' | 'project_count' | 'efficiency' | 'client_satisfaction';
  target_value: number;
  current_value: number;
  unit: 'currency' | 'hours' | 'percentage' | 'count';
  period: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  start_date: string;
  end_date: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: 'financial' | 'productivity' | 'growth' | 'client_relations';
  milestones?: BusinessGoalMilestone[];
  is_active: boolean;
  achieved: boolean;
  achieved_date?: string;
}

export interface BusinessGoalMilestone {
  title: string;
  target_value: number;
  achieved: boolean;
  achieved_date?: string;
}

export interface CommunicationChannel extends BaseEntity {
  name: string;
  channel_type: 'email' | 'sms' | 'whatsapp' | 'slack' | 'teams' | 'linkedin' | 'twitter' | 'facebook' | 'discord';
  provider: string;
  is_active: boolean;
  connection_status: 'connected' | 'disconnected' | 'error' | 'pending';
  last_sync?: string;
  settings: {
    auto_sync: boolean;
    notification_enabled: boolean;
    priority_level: 'high' | 'medium' | 'low';
  };
}

export interface Event extends BaseEntity {
  title: string;
  description?: string;
  start_time: string;
  end_time: string;
  all_day: boolean;
  location?: string;
  attendees?: string[];
  project_id?: string;
  client_id?: string;
  event_type: 'meeting' | 'deadline' | 'milestone' | 'reminder' | 'other';
  status: 'scheduled' | 'completed' | 'cancelled';
  recurrence?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    interval: number;
    end_date?: string;
  };
}

export interface Payment extends BaseEntity {
  invoice_id: string;
  amount: number;
  payment_date: string;
  payment_method: 'bank_transfer' | 'credit_card' | 'paypal' | 'stripe' | 'cash' | 'check' | 'other';
  transaction_id?: string;
  notes?: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
}
