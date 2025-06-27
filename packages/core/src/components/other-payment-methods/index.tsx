import CachIcon from "../../icons/cash";
import OtherPaymentMethodsItem from "./item";

export default function OtherPaymentMethods() {
    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="text-xl font-bold text-left">
                Other Payment Methods
            </div>
            <div className="flex flex-row gap-3">
                <OtherPaymentMethodsItem title="Cash On Delivery" description="Pay In Cash" icon={<CachIcon width={40} height={40}/>} />
            </div>
        </div>
    )
}