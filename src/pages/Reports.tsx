import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Download, Calendar } from 'lucide-react';

export const Reports: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7days');

  const revenueData = [
    { date: 'Mon', revenue: 2400, leads: 12 },
    { date: 'Tue', revenue: 3200, leads: 18 },
    { date: 'Wed', revenue: 2800, leads: 14 },
    { date: 'Thu', revenue: 3900, leads: 22 },
    { date: 'Fri', revenue: 4200, leads: 25 },
    { date: 'Sat', revenue: 3100, leads: 16 },
    { date: 'Sun', revenue: 2847, leads: 24 },
  ];

  const replyData = [
    { name: 'Automated', value: 156, color: '#0ea5e9' },
    { name: 'Human', value: 34, color: '#a855f7' },
  ];

  const responseTimeData = [
    { hour: '00:00', time: 45 },
    { hour: '04:00', time: 38 },
    { hour: '08:00', time: 72 },
    { hour: '12:00', time: 95 },
    { hour: '16:00', time: 88 },
    { hour: '20:00', time: 65 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Reports</h1>
          <p className="text-neutral-600 mt-1">Analytics and performance metrics</p>
        </div>
        <div className="flex gap-3">
          <Select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            options={[
              { value: '7days', label: 'Last 7 Days' },
              { value: '30days', label: 'Last 30 Days' },
              { value: '90days', label: 'Last 90 Days' },
            ]}
          />
          <Button variant="secondary" size="md">
            <Calendar size={16} className="mr-2" />
            Custom Range
          </Button>
          <Button variant="primary" size="md">
            <Download size={16} className="mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card padding="lg">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Revenue Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="date" stroke="#737373" />
              <YAxis stroke="#737373" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#0ea5e9"
                strokeWidth={2}
                dot={{ fill: '#0ea5e9', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card padding="lg">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Leads Generated</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="date" stroke="#737373" />
              <YAxis stroke="#737373" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="leads" fill="#22c55e" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card padding="lg">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Automated vs Human Replies
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={replyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value, percent }) =>
                  `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {replyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-900">82%</div>
              <div className="text-sm text-neutral-600">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-900">18%</div>
              <div className="text-sm text-neutral-600">Human Handled</div>
            </div>
          </div>
        </Card>

        <Card padding="lg">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Average Response Time
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="hour" stroke="#737373" />
              <YAxis stroke="#737373" label={{ value: 'Seconds', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="time"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ fill: '#f59e0b', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <div className="text-2xl font-bold text-neutral-900">72s</div>
            <div className="text-sm text-neutral-600">Average response time today</div>
          </div>
        </Card>
      </div>

      <Card padding="lg">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Key Performance Indicators</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-neutral-50 rounded-lg">
            <div className="text-3xl font-bold text-sky-600">4.8/5.0</div>
            <div className="text-sm text-neutral-600 mt-1">Customer Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-neutral-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">92%</div>
            <div className="text-sm text-neutral-600 mt-1">First Contact Resolution</div>
          </div>
          <div className="text-center p-4 bg-neutral-50 rounded-lg">
            <div className="text-3xl font-bold text-amber-600">1.2 min</div>
            <div className="text-sm text-neutral-600 mt-1">Avg Response Time</div>
          </div>
          <div className="text-center p-4 bg-neutral-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">$18.5K</div>
            <div className="text-sm text-neutral-600 mt-1">Revenue This Week</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
