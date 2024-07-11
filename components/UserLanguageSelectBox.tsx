"use client";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import GetIcon from "@/components/GetIcon";
import Link from "next/link";
import React, { useState } from "react";

const languages = [
  { id: 1, flag: "fi fi-us", lang: "English", route: "/en" },
  { id: 2, flag: "fi fi-ir", lang: "Farsi", route: "/fa" },
  { id: 3, flag: "fi fi-pk", lang: "Urdu", route: "/ur" },
];

const UserLanguageSelectBox = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className=" p-2 cursor-pointer"
        >
          <span className="text-2xl">
            {selectedLanguage === "" ? (
              <GetIcon name="HiOutlineGlobeAlt" />
            ) : (
              <span className={`text-xl ${selectedLanguage}`}></span>
            )}
          </span>
        </div>

        <div
          className={`flex flex-col bg-sky-100 w-40 my-0 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0 "
          } transition-all duration-200 overflow-hidden absolute top-12 right-0`}
        >
          {languages.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setOpen(false);
                setSelectedLanguage(item.flag);
              }}
              className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-orange-100 cursor-pointer`}
            >
              <Link
                href={item.route}
                className="justify-between flex-1 flex items-center"
              >
                <span className={`flag-icon ${item.flag}`} />
                <span className="ml-2">{item.lang}</span>
              </Link>
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

export default UserLanguageSelectBox;
