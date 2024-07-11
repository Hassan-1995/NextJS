"use client";
import React from "react";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineCog6Tooth,
  HiOutlinePhone,
} from "react-icons/hi2";
import GetIcon from "../components/GetIcon";

const VerticalNav = () => {
  return (
    // <div className="fixed top-0 left-0 h-full flex flex-col bg-primary  text-white p-4">
    <div className="fixed top-0 h-full flex flex-col bg-primary  text-white p-4">
      <Link
        href="/"
        title="Home"
        className="mb-4 p-2 bg-secondary rounded-xl hover:bg-gray-800"
      >
        <GetIcon name="HiOutlineHome" className="mr-2" size={30} />
      </Link>
      <Link
        href="/about"
        title="About"
        className="mb-4 p-2 bg-secondary rounded-xl hover:bg-gray-800"
      >
        <GetIcon name="HiOutlineInformationCircle" className="mr-2" size={30} />
      </Link>
      <Link
        href="/services"
        title="Services"
        className="mb-4 p-2 bg-secondary rounded-xl hover:bg-gray-800"
      >
        <GetIcon name="HiOutlineCog6Tooth" className="mr-2" size={30} />
      </Link>
      <Link
        href="/contact"
        title="Contacts"
        className="p-2 bg-secondary rounded-xl hover:bg-gray-800"
      >
        <GetIcon name="HiOutlinePhone" className="mr-2" size={30} />
      </Link>
    </div>
  );
};

export default VerticalNav;
