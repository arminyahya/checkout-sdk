import React, { useState } from 'react';
import CardPreview from '../card-preview';
import { FormInput } from '../../kit/form-input';

interface CardFormData {
  cardNumber: string;
  cardName: string;
  expirationDate: string;
  cvv: string;
}

interface AddNewCardProps {
  onAddCard: (card: CardFormData) => void;
}

export const AddNewCard: React.FC<AddNewCardProps> = ({ onAddCard }) => {
  const [formData, setFormData] = useState<CardFormData>({
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CardFormData, string>>>({});

  const handleChange = (field: keyof CardFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (field === 'cardNumber') {
      const digitsOnly = value.replace(/\D/g, '');
      value = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    }

    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!formData.cardNumber.match(/^(\d{4}\s){3}\d{4}$/)) {
      newErrors.cardNumber = 'Invalid card number format';
    }

    if (!formData.cardName.trim()) {
      newErrors.cardName = 'Card holder name is required';
    } else if (!formData.cardName.match(/^[a-zA-Z\s]*$/)) {
      newErrors.cardName = 'Only letters and spaces are allowed';
    }

    if (!formData.expirationDate.trim()) {
      newErrors.expirationDate = 'Expiration date is required';
    } else if (!formData.expirationDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      newErrors.expirationDate = 'Invalid date format (MM/YY)';
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (!formData.cvv.match(/^[0-9]{3}$/)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onAddCard(formData);
    setFormData({
      cardNumber: '',
      cardName: '',
      expirationDate: '',
      cvv: '',
    });
    setErrors({});
  };

  return (
    <div data-testid="add-new-card">
      <div className="mb-8">
        <CardPreview
          cardNumber={formData.cardNumber.replace(/\s/g, '')}
          fullName={formData.cardName}
          expirationDate={formData.expirationDate || 'MM/YY'}
        />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormInput
          name="cardNumber"
          label="Card Number"
          value={formData.cardNumber}
          onChange={handleChange('cardNumber')}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          required
          error={errors.cardNumber}
        />
        <FormInput
          name="cardName"
          label="Card Holder"
          value={formData.cardName}
          onChange={handleChange('cardName')}
          placeholder="John Doe"
          required
          error={errors.cardName}
        />
        <FormInput
          name="expirationDate"
          label="Expiration Date"
          value={formData.expirationDate}
          onChange={handleChange('expirationDate')}
          placeholder="MM/YY"
          maxLength={5}
          required
          error={errors.expirationDate}
        />
        <FormInput
          name="cvv"
          label="CVV"
          type="password"
          value={formData.cvv}
          onChange={handleChange('cvv')}
          placeholder="123"
          maxLength={3}
          required
          error={errors.cvv}
        />
        <button
          role="submit"
          type="submit"
          className="bg-[#1e9591] text-white px-6 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1e9591] focus:ring-offset-2 transition-colors border border-[#1e9591] hover:bg-[#1e9591]/80"
        >
          Add Card
        </button>
      </form>
    </div>
  );
};
