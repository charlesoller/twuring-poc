import { GrHomeRounded, GrNavigate, GrNotification, GrInbox, GrUser } from "react-icons/gr";
import { MenuItem } from "./MenuItem";
import { CreateTwur } from "./CreateTwur";
export function Menu(){
    return (
        <section className="flex flex-col gap-2 px-4 py-8 w-1/4 fixed">
            <h1 className="text-white text-4xl font-semibold ml-3 mb-4">Twuring</h1>
            <MenuItem icon={<GrHomeRounded />}>
                Home
            </MenuItem>
            <MenuItem icon={<GrNavigate />}>
                Explore
            </MenuItem>
            <MenuItem icon={<GrNotification />}>
                Notifications
            </MenuItem>
            <MenuItem icon={<GrHomeRounded />}>
                Home
            </MenuItem>
            <MenuItem icon={<GrInbox />}>
                Messages
            </MenuItem>
            <MenuItem icon={<GrUser />}>
                Profile
            </MenuItem>
            <CreateTwur />
        </section>
    )
}
