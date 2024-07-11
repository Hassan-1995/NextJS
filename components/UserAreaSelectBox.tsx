"use client";
import GetIcon from "@/components/GetIcon";
import Link from "next/link";
import React, { useState } from "react";

const actions = [
  { id: 1, label: "User Dashboard", route: "/users/dashboard" },
  { id: 2, label: "Transactions", route: "/users/transactions" },
  { id: 3, label: "Orders", route: "/users/orders" },
  { id: 4, label: "Friends", route: "/users/friends" },
  { id: 5, label: "Log Out", route: "/auth/logout" },
];

const UserAreaSelectBox = () => {
  const [selectedArea, setSelectedArea] = useState("User Area");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className=" p-2 cursor-pointer"
        >
          <span className="border-2 border-blue-600 p-1 rounded-lg">
            {selectedArea}
          </span>
        </div>

        <div
          className={`flex flex-col bg-sky-100 w-40 my-0 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0 "
          } transition-all duration-200 overflow-hidden absolute top-12 right-0`}
        >
          {actions.map((item) => (
            <div
              key={item.id}
              onClick={() => { 
                setOpen(false);
                setSelectedArea(item.label)
              }}
              className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-orange-100 cursor-pointer`}
            >
              <Link href={item.route}>{item.label}</Link>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-sky-100 fixed inset-0 opacity-50 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default UserAreaSelectBox;
