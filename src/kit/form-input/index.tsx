import React from 'react';
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form';
import { ErrorMessage } from '../error-message';

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  required?: boolean;
  pattern?: {
    value: RegExp;
    message: string;
  };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  maxLength,
  required = false,
  pattern,
  onChange,
}: FormInputProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 text-left">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
          pattern,
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type={type}
              id={name}
              onChange={(e) => {
                field.onChange(e);
                onChange?.(e);
              }}
              placeholder={placeholder}
              maxLength={maxLength}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
            <ErrorMessage message={error?.message} />
          </>
        )}
      />
    </div>
  );
};  