import Search from "./Search";
import WhatsPopular from "./whatsPopular";

export default function AnotherFeed() {
    return (
        <div className="flex flex-col p-2 justify-center border-2 w-1/2 h-3/5">
            <Search />
            <WhatsPopular />
        </div>
    );
}