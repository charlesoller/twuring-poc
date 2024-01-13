import { ReactNode } from "react";

export function MenuItem({ icon, children }: { icon: ReactNode, children: string }){
    return (
        <button className="flex items-center gap-3 p-4 text-white/80 hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent rounded-xl transition transition-duration-200">
            <span className="w-5 h-5">
                { icon }
            </span>
            <span className="text-lg text-white/90">
                { children }
            </span>
        </button>
    )
}
