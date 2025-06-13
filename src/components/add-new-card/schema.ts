
import { z } from 'zod';

export const cardFormSchema = z.object({
  cardNumber: z.string()
    .min(1, 'Card number is required')
    .regex(/^(\d{4}\s){3}\d{4}$/, 'Invalid card number format'),
  cardName: z.string()
    .min(1, 'Card holder name is required')
    .regex(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed'),
  expirationDate: z.string()
    .min(1, 'Expiration date is required')
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Invalid date format (MM/YY)'),
  cvv: z.string()
    .min(1, 'CVV is required')
    .regex(/^[0-9]{3}$/, 'CVV must be 3 digits'),
});

export type CardFormData = z.infer<typeof cardFormSchema>;
