import Image from "next/image";

export default function Post(props: {image: string ,username: string, name: string, post_title: string, post_text: string}) {
    return (
        <div className="flex flex-col p-4 justify-center border-2 mx-8">
            <div className="flex flex-row gap-2">
                <Image src={props.image} alt="user" width={50} height={50} className="rounded-full"/>
                <div>
                    <p className="text-blue-300">{props.username}</p>
                    <p className="text-gray-500">{props.name}</p>
                </div>
            </div>
            <div className="">
                <h1 className="text-2xl pb-2 pt-2">{props.post_title}</h1>
                <p className="text-lg">{props.post_text}</p>
            </div>
        </div>
    );
}