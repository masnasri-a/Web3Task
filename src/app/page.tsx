"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import HomeMenu from "./Menu/home";
import Project from "./Menu/project";
import Wallet from "./Menu/wallet";
import Settings from "./Menu/settings";
import Support from "./Menu/support";

export default function Home() {
  const [menu, setMenu] = useState(0);
  const content = [
    <HomeMenu />,
    <Project />,
    <Wallet />,
    <Settings />,
    <Support />,
  ];
  return (
    <div className="body">
      <Header />
      <div className="menus">
        <Sidebar menu={setMenu} />
        <div className="mainMenu">{content[menu]}</div>
      </div>
    </div>
  );
}
