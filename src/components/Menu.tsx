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
        <section className="flex flex-col gap-2 px-4 py-4 w-1/5 fixed">
            <Link to="/" className="text-white text-3xl font-semibold ml-3 mb-2 w-fit p-2 hover:tracking-widest hover:text-blue-500 transition-all duration-500">
                Twuring
            </Link>
            <Link to="/">
                <MenuItem icon={<GrHomeRounded />} active={pathname === "/"} tooltip="Go to Feed">
                    Home
                </MenuItem>
            </Link>
            <Link to="/twurs">
                <MenuItem icon={<GrNavigate />} active={pathname === "/twurs"} tooltip="View All Twurs">
                    Explore
                </MenuItem>
            </Link>
            <MenuItem icon={<GrNotification />} active={false} tooltip="Coming Soon">
                Notifications
            </MenuItem>
            <MenuItem icon={<GrInbox />} active={false} tooltip="Coming Soon">
                Messages
            </MenuItem>
            <MenuItem icon={<GrUser />} active={false} tooltip="Coming Soon">
                Profile
            </MenuItem>
            <CreateTwur />
        </section>
    )
}
