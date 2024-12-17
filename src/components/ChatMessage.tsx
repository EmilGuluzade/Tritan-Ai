import React from 'react';
import { Bot, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  return (
    <div
      className={cn(
        'flex gap-3 p-4 rounded-lg',
        isBot 
          ? 'bg-gray-100 dark:bg-gray-800' 
          : 'bg-blue-50 dark:bg-blue-900/30'
      )}
    >
      <div className="w-8 h-8 rounded-full flex items-center justify-center">
        {isBot ? (
          <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        ) : (
          <User className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-800 dark:text-gray-200">{message}</p>
      </div>
    </div>
  );
};