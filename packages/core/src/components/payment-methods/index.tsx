import AddNewCardBox from "../add-new-card-box";
import CardPreview from "../card-preview";
import OtherPaymentMethods from "../other-payment-methods";

interface Card {
    cardNumber: string;
    cardName: string;
    cvv: string;
    expirationDate: string;
}

interface PaymentMethodsProps {
    cards: Card[];
    onAddCardClick: () => void;
}

export default function PaymentMethods({ cards, onAddCardClick }: PaymentMethodsProps) {

    return (
        <div className='w-full flex flex-col gap-5'>
            <div className="flex flex-col gap-3">
               <div className="text-xl font-bold text-left">By Card</div> 
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

                <div onClick={onAddCardClick}>
                    <AddNewCardBox title={cards.length > 0 ? "Add New Card" : "Add Card"}/>
                </div>
            </div>
            <OtherPaymentMethods />
        </div>
    )
}