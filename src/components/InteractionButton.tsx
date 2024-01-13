import { ReactNode } from "react"

export function InteractionButton({ icon, children }: { icon: ReactNode, children: number }){
    return (
        <button
        className="flex py-3 px-4 gap-4 rounded-xl text-white/80 items-center bg-gradient-to-r from-white/10 to-white/5 inline-block hover:scale-110 hover:bg-white/10 transition transition-duration-300"
        >
            <span className="w-4 h-4">{icon}</span>
            <p>
                {children}
            </p>
        </button>
    )
}
