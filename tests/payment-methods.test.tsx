import React from 'react';
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../src/App'

test('loads and displays initial cards', () => {
  render(<App initialCards={[{
    cardNumber: '4111 1111 1111 1111',
    cardName: 'Armin Yahya',
    cvv: '123',
    expirationDate: '12/25'
  }]} />)

  const previewCard = screen.getByTestId('card-preview');
  expect(previewCard).toHaveTextContent('4111 1111 1111 1111');
  expect(previewCard).toHaveTextContent('Armin Yahya');
  expect(previewCard).toHaveTextContent('12/25');

})

test('display add new card form when clicking on button', async () => {
  render(<App />)
  
  await userEvent.click(screen.getByText('Add New Card'))
  expect(screen.getByTestId('add-new-card')).toBeInTheDocument()
})