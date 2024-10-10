import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

function AppLayout() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default AppLayout
