import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaStream } from "react-icons/fa";

const SidebarItems = [
    {
        name: "Home",
        path: "/",
        icon: FaHome,
    },
    {
        name: "Explore",
        path: "/",
        icon: FaSearch
    },
    {
        name: "Notifications",
        path: "/",
        icon: FaBell
    },
    {
        name: "Messages",
        path: "/",
        icon: FaCommentAlt
    },
    {
        name: "Lists",
        path: "/",
        icon: FaClipboardList
    },
    {
        name: "Bookmarks",
        path: "/",
        icon: FaBookmark
    },
    {
        name: "Communities",
        path: "/",
        icon: FaHouseUser
    },
    {
        name: "Premium",
        path: "/",
        icon: FaTwitterSquare
    },
    {
        name: "Profile",
        path: "/",
        icon: FaUser
    },
    {
        name: "More",
        path: "/",
        icon: FaStream
    },
]

export default SidebarItems