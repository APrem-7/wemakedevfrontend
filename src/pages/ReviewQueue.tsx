import React, { useState } from 'react';
import { ReviewMessageCard } from '../components/review-queue/ReviewMessageCard';
import { Badge } from '../components/ui/Badge';
import type { ReviewQueueMessage } from '../types';

export const ReviewQueue: React.FC = () => {
  const [messages, setMessages] = useState<ReviewQueueMessage[]>([
    {
      id: '1',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      customerName: 'John Smith',
      customerPhone: '+1 555-0123',
      messageContent: 'Hi, I need to order 50 units of product XYZ. What is the delivery time?',
      ocrConfidence: 0.95,
      suggestedReply: 'Hello John! Thank you for your inquiry. Product XYZ is available and we can deliver 50 units within 3-5 business days. The total would be $2,500. Would you like to proceed with this order?',
      priority: 'high',
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      customerName: 'Sarah Johnson',
      customerPhone: '+1 555-0456',
      messageContent: 'Can you send me the invoice for my last order? I need it for accounting.',
      ocrConfidence: 0.92,
      suggestedReply: 'Hi Sarah! I\'ll send you the invoice for your recent order right away. Please check your email in the next few minutes. Is there anything else I can help you with?',
      priority: 'medium',
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      customerName: 'Mike Brown',
      customerPhone: '+1 555-0789',
      messageContent: 'The product I received has a defect. What should I do?',
      ocrConfidence: 0.88,
      suggestedReply: 'Hi Mike, I\'m sorry to hear about the defect. We take quality seriously. Please send us a photo of the defect and we\'ll immediately arrange a replacement or full refund. Which would you prefer?',
      priority: 'high',
    },
  ]);

  const handleApprove = (id: string) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const handleReject = (id: string) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const handleEdit = (id: string, reply: string) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Human Review Queue</h1>
          <p className="text-neutral-600 mt-1">Messages requiring manual approval</p>
        </div>
        <Badge variant={messages.length > 0 ? 'warning' : 'success'} size="md">
          {messages.length} Pending
        </Badge>
      </div>

      {messages.length > 0 ? (
        <div className="space-y-4">
          {messages.map((message) => (
            <ReviewMessageCard
              key={message.id}
              {...message}
              onApprove={handleApprove}
              onReject={handleReject}
              onEdit={handleEdit}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">All Clear!</h3>
            <p className="text-neutral-600">
              No messages pending review. Your AI automation is handling everything smoothly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
