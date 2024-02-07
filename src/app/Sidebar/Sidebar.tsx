import SidebarItems from "./SidebarItems"
import Link from "next/link"

export default function Sidebar (){
    return (
        <div className="w-1/5 primary rounded-md">
            <ul>
                {SidebarItems.map((item) => (
                    <Link 
                    href={item.path} 
                    key={item.name}
                    >
                        <li className="flex items-center p-2 hover:bg-slate-200 rounded-md transition-all duration-150">
                            <item.icon className="w-6 h-6 m-2"/>
                            {item.name}
                        </li>
                    </Link>

                ))}
            </ul>
        </div>
    )
}