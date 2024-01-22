// Functions
import { Outlet } from "react-router"
import { Menu } from '../components/Menu'
import {  } from '../components/Sidebar'

export default function Layout(){
    return (
        <main className="bg-zinc-900">
            <Menu />
            <Outlet />
        </main>

    )
}
