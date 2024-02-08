import Feed from "./Feed/feed";
import Sidebar from "./Sidebar/Sidebar";
import AnotherFeed from "./AnotherFeed/anotherFeed";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row mx-4 p-2 gap-4">
        <Sidebar/>
        <Feed/>
        <AnotherFeed/>
      </div>
    </main>
  );
}
