import { AddNewCard } from './components/add-new-card';
import { useLayoutEffect, useState } from 'react';
import PaymentMethods from './components/payment-methods';
import Header from './components/header';
import { setTheme } from './theme';

const customTheme = {
  colors: {
    primary: '#36a5ad',
  },
};

interface Card {
  cardNumber: string;
  cardName: string;
  cvv: string;
  expirationDate: string;
}

type View = 'payment-methods' | 'add-card';

function App({ initialCards = [] }: { initialCards?: Card[] }) {
  useLayoutEffect(() => {
    setTheme(customTheme);
  }, []);

  const [cards, setCards] = useState<Card[]>(initialCards);
  const [currentView, setCurrentView] = useState<View>('payment-methods');

  const getHeaderTitle = () => {
    switch (currentView) {
      case 'payment-methods':
        return 'Payment Methods';
      case 'add-card':
        return 'Add New Card';
      default:
        return 'Payment Methods';
    }
  };

  const addCard = (card: Card) => {
    setCards(prevCards => [...prevCards, card]);
    setCurrentView('payment-methods');
  };

  return (
    <div className="flex flex-col gap-8 max-w-[500px] w-full p-4 md:p-8">
      <Header
        title={getHeaderTitle()}
        onBack={currentView === 'add-card' ? () => setCurrentView('payment-methods') : undefined}

      />
      {currentView === 'payment-methods' && (
        <PaymentMethods cards={cards} onAddCardClick={() => setCurrentView('add-card')} />
      )}
      {currentView === 'add-card' && <AddNewCard onAddCard={addCard} />}
    </div>
  );
}

export default App;
