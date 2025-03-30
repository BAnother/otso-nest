import { LuWheat, LuStore, LuUser, LuUsers, LuTruck } from "react-icons/lu"
import NavItem from "./NavItem"
export default function Sidebar(){
    <nav className="w-[10vw] h-[90vw] bg-orage-200 flex flex-col items-center py-20">
        <NavItem icon={<LuStore className="text-4xl"/>} path="/dashboard231231" />
        <LuTruck className="text-4x1"/>
        <LuWheat className="text-4x1"/>
        <LuUser className="text-4x1"/>
        <LuUsers className="text-4x1"/>
    </nav>
}