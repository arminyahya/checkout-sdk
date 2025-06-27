interface Props {
    title: string;
}

export default function AddNewCardBox({ title } : Props) {
    return (
        <div className="text-primary border-1 flex justify-center items-center border-[#77bab8] p-3 rounded-2xl font-bold cursor-pointer">
            {title}
        </div>
    )
}``