import Link from "next/link";
import popularFeedItems from "./popularFeedItems";

export default function WhatsPopular() {
    return (
        <div className="flex flex-col">
            {popularFeedItems.map((item) => (
                <Link href="/" key={item.heading} className="hover-accent p-2 rounded-md transition-all duration-150 text-lg">
                    <h1 className="">
                        {item.heading}
                    </h1>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                    <p className="text-gray-300 text-sm">{item.postcount} posts</p>
                </Link>
            ))}
        </div>
    )
}