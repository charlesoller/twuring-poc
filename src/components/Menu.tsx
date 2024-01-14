// Components
import { GrHomeRounded, GrNavigate, GrNotification, GrInbox, GrUser } from "react-icons/gr";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";

// Functions
import { CreateTwur } from "./CreateTwur";
import { useLocation } from "react-router-dom";


export function Menu(){
    const { pathname } = useLocation()

    return (
        <section className="flex flex-col gap-2 px-4 py-8 w-1/4 fixed">
            <Link to="/" className="text-white text-4xl font-semibold ml-3 mb-2 w-fit p-2 hover:tracking-widest hover:text-blue-500 transition-all duration-500">
                Twuring
            </Link>
            <MenuItem icon={<GrHomeRounded />} active={pathname === "/"}>
                Home
            </MenuItem>
            <MenuItem icon={<GrNavigate />} active={false}>
                Explore
            </MenuItem>
            <MenuItem icon={<GrNotification />} active={false}>
                Notifications
            </MenuItem>
            <MenuItem icon={<GrHomeRounded />} active={false}>
                Home
            </MenuItem>
            <MenuItem icon={<GrInbox />} active={false}>
                Messages
            </MenuItem>
            <MenuItem icon={<GrUser />} active={false}>
                Profile
            </MenuItem>
            <CreateTwur />
        </section>
    )
}
