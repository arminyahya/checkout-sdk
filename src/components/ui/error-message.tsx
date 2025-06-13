import React from 'react';

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  
  return (
    <span className="text-red-500 text-sm mt-1 text-left">
      {message}
    </span>
  );
}; 