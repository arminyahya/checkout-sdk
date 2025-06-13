import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

interface PaymentButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
}) => {
  const { theme } = useTheme();

  const baseClasses = `
    font-sans
    text-base
    rounded-md
    shadow-md
    transition-all
    duration-200
    ease-in-out
    hover:opacity-90
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
  `;

  const variantClasses = {
    primary: `
      bg-primary
      text-white
    `,
    secondary: `
      bg-secondary
      text-white
    `,
  };

  const sizeClasses = {
    small: 'p-sm text-sm',
    medium: 'p-md text-base',
    large: 'p-lg text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};