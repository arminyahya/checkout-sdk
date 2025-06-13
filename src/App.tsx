import './App.css'
import { AddNewCard } from './components/add-new-card'
import { useState } from 'react'
import PaymentMethods from './components/payment-methods'
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import Header from './components/header'

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
  const location = useLocation();

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Payment Methods';
      case '/add-card':
        return 'Add New Card';
      default:
        return 'Payment Methods';
    }
  };

  const addCard = (card: Card) => {
    setCards(prevCards => [...prevCards, card]);
    navigate('/'); // Navigate back to payment options after adding card
  };

  return (
    <div className="flex flex-col gap-8 max-w-[500px] w-full p-4 md:p-8">
      <Header title={getHeaderTitle()} />
      <Routes>
        <Route path="/payment-methods"  index element={<PaymentMethods cards={cards} />} />
        <Route path="/add-card" element={<AddNewCard onAddCard={addCard} />} />
        <Route path="*" element={<Navigate to="/payment-methods" replace />} />

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