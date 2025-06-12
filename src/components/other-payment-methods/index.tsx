import OtherPaymentMethodsItem from "./item";

export default function OtherPaymentMethods() {
    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="text-xl font-bold text-left">
                Other Payment Methods
            </div>
            <div className="flex flex-row gap-3">
                <OtherPaymentMethodsItem title="Cash On Delivery" description="Pay In Cash" img="/cash-icon.png" />
            </div>
        </div>
    )
}