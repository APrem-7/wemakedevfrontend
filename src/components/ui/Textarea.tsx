import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-3 py-2 border rounded-md text-neutral-900 placeholder-neutral-400
          focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent
          disabled:bg-neutral-100 disabled:cursor-not-allowed resize-none
          ${error ? 'border-red-500' : 'border-neutral-300'}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helperText && !error && <p className="mt-1 text-sm text-neutral-500">{helperText}</p>}
    </div>
  );
};
