import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Toggle } from '../components/ui/Toggle';
import { Save, RefreshCw } from 'lucide-react';
import type { SettingsFormData } from '../types';

export const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsFormData>({
    ownerPhone: '+1 555-0100',
    reminderTemplate: 'Hi {name}, this is a friendly reminder about your pending order. Please let us know if you need any assistance!',
    escalationThreshold: 3,
    llmProvider: 'openai',
    autoReplyEnabled: true,
    workingHoursStart: '09:00',
    workingHoursEnd: '18:00',
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all settings to defaults?')) {
      setSettings({
        ownerPhone: '+1 555-0100',
        reminderTemplate: 'Hi {name}, this is a friendly reminder about your pending order. Please let us know if you need any assistance!',
        escalationThreshold: 3,
        llmProvider: 'openai',
        autoReplyEnabled: true,
        workingHoursStart: '09:00',
        workingHoursEnd: '18:00',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Settings</h1>
          <p className="text-neutral-600 mt-1">Configure your AI automation preferences</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="md" onClick={handleReset}>
            <RefreshCw size={16} className="mr-2" />
            Reset
          </Button>
          <Button variant="primary" size="md" onClick={handleSave} disabled={isSaving}>
            <Save size={16} className="mr-2" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card padding="lg">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Business Information</h3>
          <div className="space-y-4">
            <Input
              label="Owner Phone Number"
              type="tel"
              value={settings.ownerPhone}
              onChange={(e) => setSettings({ ...settings, ownerPhone: e.target.value })}
              placeholder="+1 555-0100"
              helperText="Phone number for escalations and notifications"
            />
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Working Hours Start
              </label>
              <Input
                type="time"
                value={settings.workingHoursStart}
                onChange={(e) => setSettings({ ...settings, workingHoursStart: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Working Hours End
              </label>
              <Input
                type="time"
                value={settings.workingHoursEnd}
                onChange={(e) => setSettings({ ...settings, workingHoursEnd: e.target.value })}
              />
            </div>
          </div>
        </Card>

        <Card padding="lg">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">AI Configuration</h3>
          <div className="space-y-4">
            <Select
              label="LLM Provider"
              value={settings.llmProvider}
              onChange={(e) => setSettings({ ...settings, llmProvider: e.target.value as any })}
              options={[
                { value: 'openai', label: 'OpenAI (GPT-4)' },
                { value: 'anthropic', label: 'Anthropic (Claude)' },
                { value: 'local', label: 'Local Model' },
              ]}
            />
            <Input
              label="Escalation Threshold"
              type="number"
              min="1"
              max="10"
              value={settings.escalationThreshold}
              onChange={(e) => setSettings({ ...settings, escalationThreshold: parseInt(e.target.value) })}
              helperText="Number of failed attempts before escalating to human"
            />
            <div className="flex items-center justify-between py-2">
              <div>
                <label className="block text-sm font-medium text-neutral-700">
                  Auto Reply Enabled
                </label>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Allow AI to send automated replies
                </p>
              </div>
              <Toggle
                checked={settings.autoReplyEnabled}
                onChange={(checked) => setSettings({ ...settings, autoReplyEnabled: checked })}
              />
            </div>
          </div>
        </Card>

        <Card padding="lg" className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Message Templates</h3>
          <div className="space-y-4">
            <Textarea
              label="Reminder Template"
              rows={4}
              value={settings.reminderTemplate}
              onChange={(e) => setSettings({ ...settings, reminderTemplate: e.target.value })}
              helperText="Use {name} for customer name, {order_id} for order ID"
            />
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">Template Variables</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p><code className="bg-blue-100 px-2 py-0.5 rounded">{'{name}'}</code> - Customer name</p>
                <p><code className="bg-blue-100 px-2 py-0.5 rounded">{'{order_id}'}</code> - Order ID</p>
                <p><code className="bg-blue-100 px-2 py-0.5 rounded">{'{product}'}</code> - Product name</p>
                <p><code className="bg-blue-100 px-2 py-0.5 rounded">{'{amount}'}</code> - Order amount</p>
              </div>
            </div>
          </div>
        </Card>

        <Card padding="lg" className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Advanced Settings</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Max Messages Per Hour"
                type="number"
                defaultValue="100"
                helperText="Rate limit for outgoing messages"
              />
              <Input
                label="Response Timeout (seconds)"
                type="number"
                defaultValue="30"
                helperText="Max time to wait for AI response"
              />
              <Input
                label="Confidence Threshold"
                type="number"
                step="0.1"
                min="0"
                max="1"
                defaultValue="0.85"
                helperText="Minimum confidence for auto-reply"
              />
              <Input
                label="Queue Processing Interval (seconds)"
                type="number"
                defaultValue="10"
                helperText="How often to check for new messages"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
