"use client";
import React, { useContext } from "react";
import Link from "next/link";

import MainHeader from "./MainHeader";
import GetIcon from "../components/GetIcon";
import { MenuContext } from "@/context/MenuContext";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { open, toggle } = useContext(MenuContext);
  
  return (
    <div className="bg-gray-200 w-screen min-h-screen">
      <MainHeader />

      <div className="flex justify-start items-start">
        {/* <aside className="bg-white rounded-lg max-w-fit p-4 "> */}
        <aside
          className={`h-screen mr-5 bg-primary text-white rounded-e-xl overflow-hidden transition-all duration-100 ${
            open ? "w-60 p-4 flex-none" : "w-0 flex-none"
          } lg:w-60 lg:p-4 `}
        >
          <ul>
            <li className="flex justify-start items-center rounded-xl p-3 hover:bg-secondary ">
              <GetIcon name="HiOutlineHome" className="mr-2" />
              <Link href="/" className="flex-1" onClick={toggle}>
                Home
              </Link>
            </li>
            <li className="flex justify-start items-center rounded-xl p-3 hover:bg-secondary ">
              <GetIcon name="HiOutlineUsers" className="mr-2" />
              <Link href="/users" className="flex-1" onClick={toggle}>
                Users
              </Link>
            </li>
            <li className="flex justify-start items-center rounded-xl p-4 hover:bg-secondary ">
              <GetIcon name="HiOutlineSquares2X2" className="mr-2" />
              <Link href="/" className="flex-1" onClick={toggle}>
                Projects
              </Link>
              <GetIcon name="HiChevronDoubleRight" className="mr-2" />
            </li>

            <li className="flex flex-col justify-start items-start rounded-xl p-4 hover:bg-secondary ">
              <div className="w-full flex flex-row justify-start items-center">
                <GetIcon name="HiOutlineInbox" className="mr-2" />
                <Link href="/" className="flex-1" onClick={toggle}>
                  Singular
                </Link>
                <GetIcon name="HiChevronDoubleRight" className="mr-2" />
              </div>
              <ul className="ml-8 mt-4">
                <li className="flex justify-center items-center gap-4">
                  <GetIcon name="HiOutlineArrowRightCircle" />
                  <Link href="/singular/selectbox" onClick={toggle}>Select Box </Link>
                </li>
              </ul>
            </li>

            <li className="flex justify-start items-center rounded-xl p-4 hover:bg-secondary ">
              <GetIcon name="HiOutlineInboxStack" className="mr-2" />
              <Link href="/" className="flex-1" onClick={toggle}>
                Complex
              </Link>
              <GetIcon name="HiChevronDoubleRight" className="mr-2" />
            </li>
            <li className="flex justify-start items-center rounded-xl p-4 hover:bg-secondary ">
              <GetIcon name="HiOutlineInformationCircle" className="mr-2" />
              <Link href="/about_us" className="flex-1" onClick={toggle}>
                About Us
              </Link>
            </li>
            <li className="flex justify-start items-center rounded-xl p-4 hover:bg-secondary ">
              <GetIcon name="HiOutlineCog6Tooth" className="mr-2" />
              <Link href="/services" className="flex-1" onClick={toggle}>
                Services
              </Link>
            </li>
            <li className="flex justify-start items-center rounded-xl p-4 hover:bg-secondary ">
              <GetIcon name="HiOutlinePhone" className="mr-2" />
              <Link href="/contact_us" className="flex-1" onClick={toggle}>
                Contacts
              </Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
