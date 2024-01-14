import { ReactNode } from "react"

export function InteractionButton({ icon, children }: { icon: ReactNode, children: number }){
    return (
        <button
        className="flex py-3 px-4 gap-4 rounded-xl text-white/80 items-center bg-gradient-to-r from-blue-300/10 to-blue-300/5 inline-block hover:scale-110 hover:bg-blue-300/10 transition transition-duration-300 drop-shadow-2xl"
        >
            <span className="w-4 h-4">{icon}</span>
            <p>
                {children}
            </p>
        </button>
    )
}
