"use client";
import React, { useContext } from "react";
import GetIcon from "../components/GetIcon";
import { MenuContext } from "@/context/MenuContext";
import Image from "next/image";
import UserAreaSelectBox from "@/components/UserAreaSelectBox";


const MainHeader = () => {
  const { toggle } = useContext(MenuContext);

  return (
    <div className="bg-white flex justify-between items-center px-4 py-4 h-14 mb-4">
      <div>
        <Image src="/SavvySave.png" alt="SavvySave" width={200} height={20} />
      </div>
      <div className="flex justify-center items-center gap-4">
        <div onClick={toggle} className="lg:hidden">
          <GetIcon name="HiBars3" className="cursor-pointer" />
        </div>
        <div>
          <UserAreaSelectBox/>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
