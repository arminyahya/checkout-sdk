import React from 'react';
import { expect, test, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { AddNewCard } from '../src/components/add-new-card';

test('Update card-preview when entering data', async () => {
    const user = userEvent.setup();
    const mockAddCard = vi.fn();

    render(<AddNewCard onAddCard={mockAddCard} />);

    const cardNumberInput = screen.getByLabelText(/card number/i);
    const cardNameInput = screen.getByLabelText(/card holder/i);
    const expirationDateInput = screen.getByLabelText(/expiration date/i);

    await user.type(cardNumberInput, '1234567890123456'); // will be formatted internally
    await user.type(cardNameInput, 'Alice Smith');
    await user.type(expirationDateInput, '12/34');

    expect(screen.getByTestId('card-preview')).toHaveTextContent('1234567890123456');
    expect(screen.getByTestId('card-preview')).toHaveTextContent('Alice Smith');
    expect(screen.getByTestId('card-preview')).toHaveTextContent('12/34');
})

test('shows validation errors for invalid input', async () => {
    const user = userEvent.setup();
    const mockAddCard = vi.fn();

    render(<AddNewCard onAddCard={mockAddCard} />);

    const cardNumberInput = screen.getByLabelText(/card number/i);
    const cardNameInput = screen.getByLabelText(/card holder/i);
    const expirationDateInput = screen.getByLabelText(/expiration date/i);
    const cvvInput = screen.getByLabelText(/CVV/i);
    const submitButton = screen.getByText('Add Card');

    // Enter invalid data
    await user.type(cardNumberInput, '123');
    await user.type(cardNameInput, '123');
    await user.type(expirationDateInput, '13/99');
    await user.type(cvvInput, '12');

    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Invalid card number format')).toBeInTheDocument();
      expect(screen.getByText('Only letters and spaces are allowed')).toBeInTheDocument();
      expect(screen.getByText('Invalid date format (MM/YY)')).toBeInTheDocument();
      expect(screen.getByText('CVV must be 3 digits')).toBeInTheDocument();
    });

    expect(mockAddCard).not.toHaveBeenCalled();
  });

  test('submits form successfully with valid input', async () => {
  const user = userEvent.setup();
  const mockAddCard = vi.fn();

  render(<AddNewCard onAddCard={mockAddCard} />);

  const cardNumberInput = screen.getByLabelText(/card number/i);
  const cardNameInput = screen.getByLabelText(/card holder/i);
  const expirationDateInput = screen.getByLabelText(/expiration date/i);
  const cvvInput = screen.getByLabelText(/CVV/i);
  const submitButton = screen.getByText('Add Card');

  await user.type(cardNumberInput, '1234 5678 9012 3456');
  await user.type(cardNameInput, 'Alice Smith');
  await user.type(expirationDateInput, '12/34');
  await user.type(cvvInput, '123');

  await user.click(submitButton);

  await waitFor(() => {
    expect(screen.queryByText(/invalid/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();

    expect(mockAddCard).toHaveBeenCalledWith({
      cardNumber: '1234 5678 9012 3456',
      cardName: 'Alice Smith',
      expirationDate: '12/34',
      cvv: '123',
    });
  });
});
