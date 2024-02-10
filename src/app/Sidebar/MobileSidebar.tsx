import SidebarItems from "./SidebarItems"
import Link from "next/link"

export default function MobileSidebar (){
    return (
        <div className="rounded-md">
            <div>
                <ul>
                    {SidebarItems.map((item) => (
                        <Link 
                        href={item.path} 
                        key={item.name}
                        >
                            <li className="flex items-center hover-accent p-2 rounded-md transition-all duration-150">
                                <item.icon className="w-6 h-6 m-2"/>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div>
                <Link href="/">
                    <p className="mobile-button-bg">+</p>
                </Link>
            </div>
        </div>
    )
}