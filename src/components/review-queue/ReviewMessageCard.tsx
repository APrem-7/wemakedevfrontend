import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Textarea } from '../ui/Textarea';
import { User, Phone, Clock, AlertTriangle } from 'lucide-react';
import type { ReviewQueueMessage } from '../../types';

interface ReviewMessageCardProps extends ReviewQueueMessage {
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onEdit: (id: string, reply: string) => void;
}

export const ReviewMessageCard: React.FC<ReviewMessageCardProps> = ({
  id,
  timestamp,
  customerName,
  customerPhone,
  messageContent,
  ocrConfidence,
  suggestedReply,
  priority,
  onApprove,
  onReject,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedReply, setEditedReply] = useState(suggestedReply);

  const priorityConfig = {
    high: { variant: 'danger' as const, label: 'High Priority' },
    medium: { variant: 'warning' as const, label: 'Medium Priority' },
    low: { variant: 'info' as const, label: 'Low Priority' },
  };

  const formatTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleSaveEdit = () => {
    onEdit(id, editedReply);
    setIsEditing(false);
  };

  return (
    <Card padding="lg" className="border-l-4 border-amber-500">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
              <User size={20} className="text-sky-600" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">{customerName}</h3>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Phone size={14} />
                <span>{customerPhone}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge variant={priorityConfig[priority].variant} size="sm">
              {priorityConfig[priority].label}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-neutral-500">
              <Clock size={12} />
              <span>{formatTime(timestamp)}</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Customer Message
          </label>
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
            <p className="text-neutral-900">{messageContent}</p>
          </div>
          {ocrConfidence !== undefined && ocrConfidence < 0.9 && (
            <div className="flex items-center gap-2 mt-2 text-sm text-amber-600">
              <AlertTriangle size={14} />
              <span>Low OCR confidence ({Math.round(ocrConfidence * 100)}%)</span>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Suggested Reply
          </label>
          {isEditing ? (
            <Textarea
              value={editedReply}
              onChange={(e) => setEditedReply(e.target.value)}
              rows={4}
              className="font-mono text-sm"
            />
          ) : (
            <div className="p-3 bg-sky-50 rounded-lg border border-sky-200">
              <p className="text-neutral-900">{suggestedReply}</p>
            </div>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          {isEditing ? (
            <>
              <Button variant="secondary" onClick={() => setIsEditing(false)} className="flex-1">
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSaveEdit} className="flex-1">
                Save & Approve
              </Button>
            </>
          ) : (
            <>
              <Button variant="danger" onClick={() => onReject(id)} className="flex-1">
                Reject
              </Button>
              <Button variant="secondary" onClick={() => setIsEditing(true)} className="flex-1">
                Edit
              </Button>
              <Button variant="primary" onClick={() => onApprove(id)} className="flex-1">
                Approve
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};
