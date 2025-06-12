interface CardPreview {
    fullName: string;
    cardNumber: string;
    expirationDate: string;
}

export default function CardPreview({ fullName, cardNumber, expirationDate }: CardPreview) {
    return (
        <div className="relative flex flex-col w-[332px] h-[200px] rounded-2xl bg-[#c5e2e4] p-5">
            <img className="absolute top-2 right-2" width={63} height={63}  src="/master-card-icon.png"/>
            <div className="text-left">{fullName}</div>
            <div className="mt-auto">
            <img width={30} height={15} src="/sim-icon.png"></img>
                <div className="flex gap-2 font-bold text-left">
                    {cardNumber.match(/.{1,4}/g)?.map(fourDigit => <div>{fourDigit}</div>)}

                </div>
                <div className="text-sm mt-5 text-left">{expirationDate}</div>
            </div>
        </div>
    )

}