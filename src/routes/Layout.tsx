// Functions
import { Outlet } from "react-router"

// Components
import Header from "../components/Header"

export default function Layout(){
    return (
        <>
            {/* <Header /> */}
            <Outlet />
        </>

    )
}
