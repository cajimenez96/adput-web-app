import React from 'react';

export type ButtonVariant = 'filled' | 'outlined' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  size = 'md',
  color = 'primary',
  disabled = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const getVariantClasses = (variant: ButtonVariant, color: ButtonColor) => {
    const colorMap = {
      primary: {
        filled: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
        outlined: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100',
        ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100'
      },
      secondary: {
        filled: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 active:bg-gray-800',
        outlined: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500 active:bg-gray-100',
        ghost: 'text-gray-600 hover:bg-gray-50 focus:ring-gray-500 active:bg-gray-100'
      },
      success: {
        filled: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 active:bg-green-800',
        outlined: 'border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500 active:bg-green-100',
        ghost: 'text-green-600 hover:bg-green-50 focus:ring-green-500 active:bg-green-100'
      },
      danger: {
        filled: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800',
        outlined: 'border-2 border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500 active:bg-red-100',
        ghost: 'text-red-600 hover:bg-red-50 focus:ring-red-500 active:bg-red-100'
      },
      warning: {
        filled: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500 active:bg-yellow-800',
        outlined: 'border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-500 active:bg-yellow-100',
        ghost: 'text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-500 active:bg-yellow-100'
      }
    };

    return colorMap[color][variant];
  };

  const classes = [
    baseClasses,
    sizeClasses[size],
    getVariantClasses(variant, color),
    fullWidth ? 'w-full' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;