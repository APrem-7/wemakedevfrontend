export type AIStatus = 'connected' | 'reconnecting' | 'disconnected';

export type NavigationItem = 'dashboard' | 'live-feed' | 'review-queue' | 'reports' | 'settings';

export interface MetricCard {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: string;
}

export interface LiveFeedEvent {
  id: string;
  timestamp: Date;
  type: 'job_completed' | 'new_message' | 'automation_event' | 'human_override' | 'error';
  title: string;
  description: string;
  status?: 'success' | 'warning' | 'error' | 'info';
}

export interface ReviewQueueMessage {
  id: string;
  timestamp: Date;
  customerName: string;
  customerPhone: string;
  messageContent: string;
  ocrConfidence?: number;
  suggestedReply: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ReportData {
  date: string;
  revenue: number;
  leads: number;
  autoReplies: number;
  humanReplies: number;
}

export interface SettingsFormData {
  ownerPhone: string;
  reminderTemplate: string;
  escalationThreshold: number;
  llmProvider: 'openai' | 'anthropic' | 'local';
  autoReplyEnabled: boolean;
  workingHoursStart: string;
  workingHoursEnd: string;
}
