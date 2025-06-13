import AddNewCardBox from "../add-new-card-box";
import CardPreview from "../card-preview";
import OtherPaymentMethods from "../other-payment-methods";
import { useNavigate } from 'react-router-dom';

interface Card {
    cardNumber: string;
    cardName: string;
    cvv: string;
    expirationDate: string;
}

interface PaymentMethodsProps {
    cards: Card[];
}

export default function PaymentMethods({ cards }: PaymentMethodsProps) {
    const navigate = useNavigate();

    const handleAddNewCard = () => {
        navigate('/add-card');
    };

    return (
        <div className='w-full flex flex-col gap-5'>
            <div className="flex flex-col gap-3">
                <div className="text-xl font-bold text-left">Your Cards</div>
                <div className="overflow-x-auto">
                    <div className="flex gap-4 pb-4">
                        {cards.map((card, index) => (
                            <CardPreview
                                key={index}
                                fullName={card.cardName}
                                cardNumber={card.cardNumber}
                                expirationDate={card.expirationDate}
                            />
                        ))}
                    </div>
                </div>

                <div onClick={handleAddNewCard}>
                    <AddNewCardBox />
                </div>
            </div>
            <OtherPaymentMethods />
        </div>
    )
}