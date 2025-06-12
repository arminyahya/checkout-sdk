export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-2 w-full">
            {children}  
        </div>
    )
}