"use client";
import React, { useContext } from "react";
import Link from "next/link";

import MainHeader from "./MainHeader";
import GetIcon from "./GetIcon";
import { MenuContext } from "@/context/MenuContext";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { open } = useContext(MenuContext);

  return (
    <div className="bg-gray-200 w-screen min-h-screen">
      <MainHeader />

      <div className="flex justify-start items-start">
        {/* <aside className="bg-white rounded-lg w-60 p-4 "> */}
        <aside
          className={`h-screen mr-5 bg-white rounded-lg overflow-hidden transition-all duration-100 ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg:p-4 `}
        >
          <ul>
            <li className="flex justify-start items-center rounded-xl p-4 hover:bg-blue-200 ">
              <GetIcon name="HiOutlineHome" className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center rounded-xl p-4 hover:bg-blue-200 ">
              <GetIcon name="HiOutlineSquares2X2" className="mr-2" />
              <Link href="/" className="flex-1">
                Projects
              </Link>
              <GetIcon name="HiChevronDoubleRight" className="mr-2" />
            </li>
            <li className="flex justify-start items-center rounded-xl p-4 hover:bg-blue-200 ">
              <GetIcon name="HiOutlineInformationCircle" className="mr-2" />
              <Link href="/about_us">About Us</Link>
            </li>
            <li className="flex justify-start items-center rounded-xl p-4 hover:bg-blue-200 ">
              <GetIcon name="HiOutlineCog6Tooth" className="mr-2" />
              <Link href="/services">Services</Link>
            </li>
            <li className="flex justify-start items-center rounded-xl p-4 hover:bg-blue-200 ">
              <GetIcon name="HiOutlinePhone" className="mr-2" />
              <Link href="/contact_us">Contacts</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
