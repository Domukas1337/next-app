'use client'

import Feed from "./Feed/feed";
import Sidebar from "./Sidebar/Sidebar";
import AnotherFeed from "./AnotherFeed/anotherFeed";
import MobileSidebar from "./Sidebar/MobileSidebar";
import { useEffect, useState } from "react";
import LoginModal from "./Modals/LoginModal";


export default function Home() {
  const [isDesktop, setIsDesktop] = useState(true);

  // Check if the window size is greater than 1024px
  const checkWindowSize = () => {
    let windowWidth: number | undefined;
    if(typeof window !== "undefined"){
      windowWidth = window.innerWidth;
    }
    if(windowWidth && windowWidth >= 1024) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  //Logic when user opens the site
  useEffect(() => {
    checkWindowSize();
  }, [isDesktop]);

  //Logic when user resizes the window
  if(typeof window !== "undefined"){
    window.addEventListener("resize", checkWindowSize);
  }

  return (
    <main>
      <div className="flex flex-row mx-4 p-2 gap-4">
        <LoginModal/>
        {isDesktop ? <MobileSidebar/> : <Sidebar/>}
        <Feed/>
        {isDesktop ? null : <AnotherFeed/>}
      </div>
    </main>
  );
}
