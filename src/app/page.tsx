import Feed from "./feed";
import Sidebar from "./Sidebar/Sidebar";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row mx-4">
        <Sidebar/>
        <Feed/>
      </div>
    </main>
  );
}
