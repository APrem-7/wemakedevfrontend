import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
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
      <input
        className={`
          w-full px-3 py-2 border rounded-md text-neutral-900 placeholder-neutral-400
          focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent
          disabled:bg-neutral-100 disabled:cursor-not-allowed
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
