import React from 'react';
import { DollarSign, Users, Clock, Send } from 'lucide-react';
import { MetricCard } from '../components/dashboard/MetricCard';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const Dashboard: React.FC = () => {
  const metrics = [
    {
      label: 'Today Revenue',
      value: '$2,847',
      change: '+12.5% from yesterday',
      changeType: 'positive' as const,
      icon: <DollarSign size={24} />,
    },
    {
      label: 'New Leads',
      value: '24',
      change: '+8 from yesterday',
      changeType: 'positive' as const,
      icon: <Users size={24} />,
    },
    {
      label: 'Pending Reviews',
      value: '3',
      change: 'Requires attention',
      changeType: 'neutral' as const,
      icon: <Clock size={24} />,
    },
    {
      label: 'Replies Sent',
      value: '156',
      change: '+23 from yesterday',
      changeType: 'positive' as const,
      icon: <Send size={24} />,
    },
  ];

  const recentActivity = [
    { id: '1', action: 'New order received', customer: 'John Smith', time: '2 minutes ago', status: 'success' as const },
    { id: '2', action: 'Payment confirmed', customer: 'Sarah Johnson', time: '15 minutes ago', status: 'success' as const },
    { id: '3', action: 'Lead needs review', customer: 'Mike Brown', time: '32 minutes ago', status: 'warning' as const },
    { id: '4', action: 'Delivery scheduled', customer: 'Emma Davis', time: '1 hour ago', status: 'info' as const },
    { id: '5', action: 'Follow-up sent', customer: 'Chris Wilson', time: '2 hours ago', status: 'success' as const },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
        <p className="text-neutral-600 mt-1">Overview of your business operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card padding="lg">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-900">{activity.action}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{activity.customer}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-500">{activity.time}</span>
                  <Badge variant={activity.status} size="sm">
                    {activity.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card padding="lg">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-600">Automation Rate</span>
                <span className="font-medium text-neutral-900">87%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-sky-600 h-2 rounded-full" style={{ width: '87%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-600">Response Time</span>
                <span className="font-medium text-neutral-900">1.2 min</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-600">Customer Satisfaction</span>
                <span className="font-medium text-neutral-900">4.8/5.0</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '96%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-600">Queue Efficiency</span>
                <span className="font-medium text-neutral-900">92%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-sky-600 h-2 rounded-full" style={{ width: '92%' }} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
