import React from 'react';
import { CheckCircle, AlertCircle, Info, MessageSquare, Zap, UserCheck } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface EventItemProps {
  timestamp: Date;
  type: 'job_completed' | 'new_message' | 'automation_event' | 'human_override' | 'error';
  title: string;
  description: string;
  status?: 'success' | 'warning' | 'error' | 'info';
}

export const EventItem: React.FC<EventItemProps> = ({
  timestamp,
  type,
  title,
  description,
  status = 'info',
}) => {
  const typeIcons = {
    job_completed: <CheckCircle size={20} />,
    new_message: <MessageSquare size={20} />,
    automation_event: <Zap size={20} />,
    human_override: <UserCheck size={20} />,
    error: <AlertCircle size={20} />,
  };

  const typeColors = {
    job_completed: 'text-green-600 bg-green-100',
    new_message: 'text-blue-600 bg-blue-100',
    automation_event: 'text-amber-600 bg-amber-100',
    human_override: 'text-purple-600 bg-purple-100',
    error: 'text-red-600 bg-red-100',
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <div className="flex gap-4 p-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
      <div className={`flex-shrink-0 p-2 rounded-lg ${typeColors[type]}`}>
        {typeIcons[type]}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-medium text-neutral-900">{title}</h4>
          {status && (
            <Badge variant={status} size="sm">
              {status}
            </Badge>
          )}
        </div>
        <p className="text-sm text-neutral-600 mb-2">{description}</p>
        <span className="text-xs text-neutral-500 font-mono">{formatTime(timestamp)}</span>
      </div>
    </div>
  );
};
