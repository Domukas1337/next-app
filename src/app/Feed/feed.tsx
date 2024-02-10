import feedComponents from "./feedComponents";
import Link from "next/link";
import Post from "../Post/post";
import posts from "../Post/posts";

const component_class_name = "hover:bg-gray-800 mb-2 w-full text-center p-4 transition-all"

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
            <div className="flex flex-col gap-2 m-2 items-center justify-center">
                {posts.map((post) => (
                    <Post
                    key={post.post_title}
                    image={post.image}
                    username={post.username}
                    name={post.name}
                    post_title={post.post_title}
                    post_text={post.post_text}
                    />
                ))}
            </div>
        </div>
    );
}