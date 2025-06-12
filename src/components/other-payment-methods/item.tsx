import Card from "../card";

interface Props {
    title: string;
    description: string;
    img: string;
}

export default function OtherPaymentMethodsItem({
    title,
    description,
    img,
}: Props) {
    return (
        <Card>
        <div className="flex gap-5 w-full cursor-pointer">
            <div className="flex items-center justify-center bg-[#c5e2e4] rounded-xl p-2">
                <img className="w-10 h-10" src={img} alt={title} />
            </div>
            <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-gray-500 text-left">{description}</p>
            </div>
            <div className="flex justify-center items-center ms-auto">
            <img src="/right-arrow.png" alt="arrow-right" className="w-6" />
            </div>
        </div>
        </Card>
    )
}