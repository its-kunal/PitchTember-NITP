"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceAngry,
  faPlus,
  faInbox,
  faUser,
  faBook,
  faGroupArrowsRotate,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navList = [
    {
      name: "My Repos",
      leadingIcon: faBook,
      link: "myrepos",
    },
    {
      name: "Topics",
      leadingIcon: faGroupArrowsRotate,
      link: "topics",
    },
    {
      name: "Explore",
      leadingIcon: faStar,
      link: "explore",
    },
  ];
  const actions = [
    { tooltip: "Create New Repos", icon: faPlus, link: "new" },
    { tooltip: "Inbox", icon: faInbox, link: "inbox" },
    { tooltip: "Profile", icon: faUser, link: "profile" },
  ];
  const router = useRouter();
  return (
    <nav className="shadow-sm shadow-white">
      <div className="max-w-5xl flex justify-between items-center py-5 mx-auto">
        {/* Logo */}
        <div className="w-40 h-10">
          <span
            className="text-2xl font-bold tracking-tighter"
            onClick={() => {
              router.push("/");
            }}
          >
            ed<span className="text-3xl text-red-500 -skew-x-12">X</span>
          </span>
        </div>
        {/* Links */}
        <ul className="flex gap-x-6 items-center">
          {navList.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href={item.link} className="flex gap-x-2 items-center">
                  <FontAwesomeIcon
                    icon={item.leadingIcon}
                    className="text-xl"
                  />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Actions */}
        <ul className="flex gap-x-4">
          {actions.map((action) => {
            return (
              <li
                title={action.tooltip}
                key={action.tooltip}
                className="border px-2 py-2 rounded hover:text-red-500 flex justify-center items-center"
                onClick={() => {
                  router.push(action.link);
                }}
              >
                <FontAwesomeIcon icon={action.icon} className="text-xl " />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
