"use client";
import React, { useContext } from "react";

import { MenuContext } from "@/context/MenuContext";
import GetIcon from "../../components/GetIcon";
import Image from "next/image";
import UserAreaSelectBox from "@/components/UserAreaSelectBox";
import UserLanguageSelectBox from "@/components/UserLanguageSelectBox";

const MainHeader = () => {
  const { toggle } = useContext(MenuContext);

  return (
    <div className="bg-white flex justify-between items-center px-4 py-4 h-14 mb-4">
      <div className="w-auto h-auto">
        <Image
          src="/SavvySave.png"
          alt="SavvySave"
          width={100}
          height={20}
          className="w-auto h-auto"
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <div>
          <UserLanguageSelectBox />
        </div>
        <div onClick={toggle} className="lg:hidden">
          <GetIcon name="HiBars3" className="cursor-pointer" />
        </div>
        <div>
          <UserAreaSelectBox />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
