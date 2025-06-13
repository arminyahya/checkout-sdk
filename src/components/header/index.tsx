import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    title?: string;
}

export default function Header({ title = '' }: HeaderProps) {
    const navigate = useNavigate();

    return (
        <div className="flex items-center gap-4">
            <button 
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors outline-none border-none cursor-pointer"
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
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
            </button>
            <div className="text-2xl font-bold text-left">{title}</div>
        </div>
    );
} 