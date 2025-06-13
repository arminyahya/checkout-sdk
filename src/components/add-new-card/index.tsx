import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import CardPreview from '../card-preview';
import { ErrorMessage } from '../ui/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { cardFormSchema, type CardFormData } from './schema';

interface AddNewCardProps {
  onAddCard: (card: CardFormData) => void;
}

export const AddNewCard: React.FC<AddNewCardProps> = ({ onAddCard }) => {
  const { control, handleSubmit, watch, setValue } = useForm<CardFormData>({
    resolver: zodResolver(cardFormSchema),
    defaultValues: {
      cardNumber: '',
      cardName: '',
      cvv: '',
      expirationDate: '',
    },
  });

  const cardNumber = watch('cardNumber');
  const cardName = watch('cardName');
  const expirationDate = watch('expirationDate');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    // Group digits by 4 and join with spaces
    const formattedValue = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    setValue('cardNumber', formattedValue);
  };

  const onSubmit = (data: CardFormData) => {
    onAddCard(data);
    // Reset form after submission
    setValue('cardNumber', '');
    setValue('cardName', '');
    setValue('cvv', '');
    setValue('expirationDate', '');
  };

  return (
    <div className="max-w-[500px] mx-auto">
      <div className="mb-8">
        <CardPreview
          cardNumber={cardNumber.split(' ').join('')}
          fullName={cardName}
          expirationDate={expirationDate || "MM/YY"}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="cardNumber" className="text-sm font-medium text-gray-700 text-left">
            Card Number <span className="text-red-500">*</span>
          </label>
          <Controller
            name="cardNumber"
            control={control}
            rules={{
              required: 'Card number is required',
              pattern: {
                value: /^(\d{4}\s){3}\d{4}$/,
                message: 'Invalid card number format',
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <input
                  {...field}
                  type="text"
                  id="cardNumber"
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <ErrorMessage message={error?.message} />
              </>
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cardName" className="text-sm font-medium text-gray-700 text-left">
            Card Holder <span className="text-red-500">*</span>
          </label>
          <Controller
            name="cardName"
            control={control}
            rules={{
              required: 'Card holder name is required',
              pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: 'Only letters and spaces are allowed',
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <input
                  {...field}
                  type="text"
                  id="cardName"
                  placeholder="John Doe"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <ErrorMessage message={error?.message} />
              </>
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="expirationDate" className="text-sm font-medium text-gray-700 text-left">
            Expiration Date <span className="text-red-500">*</span>
          </label>
          <Controller
            name="expirationDate"
            control={control}
            rules={{
              required: 'Expiration date is required',
              pattern: {
                value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                message: 'Invalid date format (MM/YY)',
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <input
                  {...field}
                  type="text"
                  id="expirationDate"
                  placeholder="MM/YY"
                  maxLength={5}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <ErrorMessage message={error?.message} />
              </>
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cvv" className="text-sm font-medium text-gray-700 text-left">
            CVV <span className="text-red-500">*</span>
          </label>
          <Controller
            name="cvv"
            control={control}
            rules={{
              required: 'CVV is required',
              pattern: {
                value: /^[0-9]{3}$/,
                message: 'CVV must be 3 digits',
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <input
                  {...field}
                  type="password"
                  id="cvv"
                  placeholder="123"
                  maxLength={3}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <ErrorMessage message={error?.message} />
              </>
            )}
          />
        </div>

        <button
          type="submit"
          className="bg-[#1e9591] text-white px-6 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1e9591] focus:ring-offset-2 transition-colors border border-[#1e9591] hover:bg-[#1e9591]/80"
        >
          Add Card
        </button>
      </form>
    </div>
  );
};