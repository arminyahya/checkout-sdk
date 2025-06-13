import React, { useState } from 'react';
import CardPreview from '../card-preview';

interface CardFormData {
  cardNumber: string;
  cardName: string;
  cvv: string;
  expirationDate: string;
}

interface AddNewCardProps {
  onAddCard: (card: CardFormData) => void;
}

export const AddNewCard: React.FC<AddNewCardProps> = ({ onAddCard }) => {
  const [formData, setFormData] = useState<CardFormData>({
    cardNumber: '',
    cardName: '',
    cvv: '',
    expirationDate: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCard(formData);
    // Reset form after submission
    setFormData({
      cardNumber: '',
      cardName: '',
      cvv: '',
      expirationDate: '',
    });
  };

  return (
    <div className="max-w-[500px] mx-auto">
      <div className="mb-8">
        <CardPreview
          cardNumber={formData.cardNumber}
          fullName={formData.cardName}
          expirationDate="MM/YY"
        />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="cardNumber" className="text-sm font-medium text-gray-700 text-left">
            Card Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cardName" className="text-sm font-medium text-gray-700 text-left">
            Cardholder Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="expirationDate" className="text-sm font-medium text-gray-700 text-left">
            Expiration Date <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            maxLength={5}
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cvv" className="text-sm font-medium text-gray-700 text-left">
            CVV <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            maxLength={3}
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
