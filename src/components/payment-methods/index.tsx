import AddNewCardBox from "../add-new-card-box";
import CardPreview from "../card-preview";
import OtherPaymentMethods from "../other-payment-methods";

export default function PaymentOptionsScreen() {
    return (
        <div className='w-full flex flex-col gap-5'>
            <div className="flex flex-col gap-3">
                <div className="text-xl font-bold text-left">Your Card Info</div>
                <CardPreview
                    fullName='Armin Yahya'
                    cardNumber='4241921472193456'
                    expirationDate='12/25'
                />
                <AddNewCardBox />
            </div>
            <OtherPaymentMethods />
        </div>
    )
}