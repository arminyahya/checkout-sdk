import RightArrow from "../../icons/right-arrow";
import Card from "../card";

interface Props {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function OtherPaymentMethodsItem({
    title,
    description,
    icon,
}: Props) {
    return (
        <Card>
            <div className="flex gap-5 w-full cursor-pointer">
                <div className="flex items-center justify-center bg-[#c5e2e4] rounded-xl p-2">
                    {icon}
                </div>
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-sm text-gray-500 text-left">{description}</p>
                </div>
                <div className="flex justify-center items-center ms-auto">
                    <RightArrow className="w-6" />
                </div>
            </div>
        </Card>
    )
}