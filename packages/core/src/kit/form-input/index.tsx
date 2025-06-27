import React from 'react';

interface FormInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  required?: boolean;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  maxLength,
  required,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
        }`}
      />
      {error && (
        <p className="text-sm text-error text-left" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
