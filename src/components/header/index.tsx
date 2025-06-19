interface HeaderProps {
    title?: string;
    onBack?: () => void;
}

export default function Header({ onBack, title = '' }: HeaderProps) {
    return (
        <div className="flex items-center gap-4">
            <button
                onClick={onBack}
                className="hover:bg-gray-100 rounded-full transition-colors outline-none border-none cursor-pointer"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
            </button>
            <div className="text-2xl font-bold text-left">{title}</div>
        </div>
    );
} 