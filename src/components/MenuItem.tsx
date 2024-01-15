// @ts-nocheck
// the tooltip setup is giving Typescript some syntax issues but working as intended, for now disabling checking on this page

// Types
import { ReactNode } from "react";
import { Tooltip, Tag } from "@chakra-ui/react";
import { forwardRef } from "react";

const CustomCard = forwardRef(({ children, ...rest }, ref) => (
    <Tag ref={ref} {...rest} bg={"rgba(0 0 0 0)"}>
      {children}
    </Tag>
))

// I don't like how these tooltips are set up but they require a separate component for each one,
// I'll have to extract into their own components ultimately
export function MenuItem({ icon, children, active }: { icon: ReactNode, children: string, active: boolean }){
    return (
        <Tooltip label="Coming Soon" placement="right" borderRadius={"0.5rem"} display={active ? "none" : "block"}>
            <CustomCard>
                <button className={`flex items-center gap-3 p-4 w-full text-white/80 hover:bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl transition duration-300 ${active && "bg-gradient-to-r from-blue-500/20 to-transparent"}`}>
                    <span className="w-5 h-5">
                        { icon }
                    </span>
                    <span className="text-lg text-white/90">
                        { children }
                    </span>
                </button>
            </CustomCard>
        </Tooltip>
    )
}
