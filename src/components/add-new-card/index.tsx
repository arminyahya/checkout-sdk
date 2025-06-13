import React from 'react';
import { useForm } from 'react-hook-form';
import CardPreview from '../card-preview';
import { zodResolver } from '@hookform/resolvers/zod';
import { cardFormSchema, type CardFormData } from './schema';
import { FormInput } from '../../kit/form-input';

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
    const digitsOnly = value.replace(/\D/g, '');
    const formattedValue = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    setValue('cardNumber', formattedValue);
  };

  const onSubmit = (data: CardFormData) => {
    onAddCard(data);
    setValue('cardNumber', '');
    setValue('cardName', '');
    setValue('cvv', '');
    setValue('expirationDate', '');
  };

  return (
    <div className="max-w-[500px] mx-auto" data-testid="add-new-card">
      <div className="mb-8">
        <CardPreview
          cardNumber={cardNumber.split(' ').join('')}
          fullName={cardName}
          expirationDate={expirationDate || "MM/YY"}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <FormInput
          name="cardNumber"
          control={control}
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          required
          pattern={{
            value: /^(\d{4}\s){3}\d{4}$/,
            message: 'Invalid card number format',
          }}
          onChange={handleCardNumberChange}
        />

        <FormInput
          name="cardName"
          control={control}
          label="Card Holder"
          placeholder="John Doe"
          required
          pattern={{
            value: /^[a-zA-Z\s]*$/,
            message: 'Only letters and spaces are allowed',
          }}
        />

        <FormInput
          name="expirationDate"
          control={control}
          label="Expiration Date"
          placeholder="MM/YY"
          maxLength={5}
          required
          pattern={{
            value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
            message: 'Invalid date format (MM/YY)',
          }}
        />

        <FormInput
          name="cvv"
          control={control}
          label="CVV"
          type="password"
          placeholder="123"
          maxLength={3}
          required
          pattern={{
            value: /^[0-9]{3}$/,
            message: 'CVV must be 3 digits',
          }}
        />

        <button
          role='submit'
          type="submit"
          className="bg-[#1e9591] text-white px-6 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1e9591] focus:ring-offset-2 transition-colors border border-[#1e9591] hover:bg-[#1e9591]/80"
        >
          Add Card
        </button>
      </form>
    </div>
  );
};