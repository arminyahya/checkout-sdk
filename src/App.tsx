import './App.css'
import { AddNewCard } from './components/add-new-card'
import { useState } from 'react'
import PaymentMethods from './components/payment-methods'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

interface Card {
  cardNumber: string;
  cardName: string;
  cvv: string;
  expirationDate: string;
}

function AppContent() {
  const [cards, setCards] = useState<Card[]>([{
    cardNumber: '4111 1111 1111 1111',
    cardName: 'John Doe',
    cvv: '123',
    expirationDate: '12/25'
  }]);
  const navigate = useNavigate();

  const addCard = (card: Card) => {
    setCards(prevCards => [...prevCards, card]);
    navigate('/'); // Navigate back to payment options after adding card
  };

  return (
    <div className="flex flex-col gap-8 max-w-[500px] w-full p-4 md:p-8">
      <Routes>
        <Route path="/" element={<PaymentMethods cards={cards} />} />
        <Route path="/add-card" element={<AddNewCard onAddCard={addCard} />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
