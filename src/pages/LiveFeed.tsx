import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { EventItem } from '../components/live-feed/EventItem';
import { RefreshCw, Filter } from 'lucide-react';
import type { LiveFeedEvent } from '../types';

export const LiveFeed: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const events: LiveFeedEvent[] = [
    {
      id: '1',
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      type: 'new_message',
      title: 'New message received',
      description: 'Customer inquiry about product availability from +1 555-0123',
      status: 'info',
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      type: 'automation_event',
      title: 'Automated reply sent',
      description: 'Response sent to +1 555-0123 with product catalog',
      status: 'success',
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 1000 * 60 * 8),
      type: 'job_completed',
      title: 'Daily reminder job completed',
      description: 'Sent 12 follow-up reminders to pending customers',
      status: 'success',
    },
    {
      id: '4',
      timestamp: new Date(Date.now() - 1000 * 60 * 12),
      type: 'human_override',
      title: 'Human override triggered',
      description: 'Message flagged for manual review due to complex query',
      status: 'warning',
    },
    {
      id: '5',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      type: 'new_message',
      title: 'New message received',
      description: 'Order confirmation request from +1 555-0456',
      status: 'info',
    },
    {
      id: '6',
      timestamp: new Date(Date.now() - 1000 * 60 * 20),
      type: 'automation_event',
      title: 'Payment reminder sent',
      description: 'Automated payment reminder to 5 customers',
      status: 'success',
    },
    {
      id: '7',
      timestamp: new Date(Date.now() - 1000 * 60 * 25),
      type: 'error',
      title: 'Message delivery failed',
      description: 'Failed to deliver message to +1 555-0789 - invalid number',
      status: 'error',
    },
    {
      id: '8',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      type: 'job_completed',
      title: 'Customer satisfaction survey sent',
      description: 'Survey sent to 18 customers who received orders',
      status: 'success',
    },
  ];

  const filteredEvents = filter === 'all'
    ? events
    : events.filter((event) => event.type === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Live Feed</h1>
          <p className="text-neutral-600 mt-1">Real-time activity stream</p>
        </div>
        <div className="flex gap-3">
          <Button variant="ghost" size="sm">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          <Button variant="secondary" size="sm">
            <RefreshCw size={16} className="mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button
          variant={filter === 'all' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All Events
        </Button>
        <Button
          variant={filter === 'new_message' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setFilter('new_message')}
        >
          Messages
        </Button>
        <Button
          variant={filter === 'automation_event' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setFilter('automation_event')}
        >
          Automation
        </Button>
        <Button
          variant={filter === 'job_completed' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setFilter('job_completed')}
        >
          Jobs
        </Button>
        <Button
          variant={filter === 'human_override' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setFilter('human_override')}
        >
          Overrides
        </Button>
        <Button
          variant={filter === 'error' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setFilter('error')}
        >
          Errors
        </Button>
      </div>

      <Card padding="sm" className="divide-y divide-neutral-100">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventItem key={event.id} {...event} />
          ))
        ) : (
          <div className="p-8 text-center text-neutral-500">
            No events found for the selected filter
          </div>
        )}
      </Card>
    </div>
  );
};
