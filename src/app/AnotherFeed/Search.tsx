import { FaSearch } from "react-icons/fa";

export default function Search() {
    return  (
        <div className="h-fit">
            <form className="flex flex-row items-center m-2 border-2 p-2">
                <FaSearch 
                    className="w-4 h-4"
                />
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="bg-black outline-none mx-2"
                />
            </form>
        </div>
    )
}