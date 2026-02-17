import React from 'react';
import type { AIStatus } from '../../types';

interface StatusIndicatorProps {
  status: AIStatus;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  showLabel = true,
  size = 'md',
}) => {
  const statusConfig = {
    connected: {
      color: 'bg-green-500',
      label: 'Connected',
      pulseColor: 'bg-green-400',
    },
    reconnecting: {
      color: 'bg-amber-500',
      label: 'Reconnecting',
      pulseColor: 'bg-amber-400',
    },
    disconnected: {
      color: 'bg-red-500',
      label: 'Disconnected',
      pulseColor: 'bg-red-400',
    },
  };

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const config = statusConfig[status];

  return (
    <div className="inline-flex items-center gap-2">
      <div className="relative">
        <div className={`${sizeClasses[size]} ${config.color} rounded-full`} />
        {status === 'connected' && (
          <div className={`absolute inset-0 ${config.pulseColor} rounded-full animate-ping opacity-75`} />
        )}
      </div>
      {showLabel && (
        <span className="text-sm font-medium text-neutral-700">{config.label}</span>
      )}
    </div>
  );
};
