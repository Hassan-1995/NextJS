"use client";
import React, { useContext } from "react";

import { MenuContext } from "@/context/MenuContext";
import MainHeader from "./MainHeader";
import MainSideBar from "./MainSideBar";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { open, toggle } = useContext(MenuContext);

  return (
    <div className="bg-gray-200 min-h-screen">
      <MainSideBar />
      <div className={`${open ? "blur-xl md:blur-0 lg:blur-0" : "blur-0"}`}>
        <MainHeader />
        <main className="lg:ml-64">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
