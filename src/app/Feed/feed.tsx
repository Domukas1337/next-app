import feedComponents from "./feedComponents";
import Link from "next/link";

const component_class_name = "hover:bg-gray-800 w-full text-center p-4 transition-all"

export default function Feed() {
    return (
        <div className="border-2 w-screen">
            <div className="flex flex-row justify-center w-full">
                {feedComponents.map((component) => (
                    <Link 
                    href={component.path} 
                    key={component.name}
                    className="w-full"
                    >
                        <p className={component_class_name}>
                            {component.name}
                        </p>
                    </Link>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <h1>Feed</h1>
            </div>
        </div>
    );
}