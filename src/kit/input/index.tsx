import { forwardRef } from 'react';
import type { UseFormRegister } from 'react-hook-form';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  label: string;
  name: string;
  error?: string;
  register?: UseFormRegister<any>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, register, className = '', ...props }, ref) => {
    const inputProps = {
      id: name,
      className: `px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      } ${className}`,
      ...(register ? register(name) : {}),
      ...props,
    };

    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <input ref={ref} {...inputProps} />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 