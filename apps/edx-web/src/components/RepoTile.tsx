import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ACTIONS = [
  {
    name: "Edit",
    icon: faPen,
  },
  {
    name: "Fork",
    icon: faCodeFork,
  },
];

export default function RepoTile({ title, id }: { title: string; id: string }) {
  return (
    <Link href={`/a/${id}`}>
      <div className="mx-1 mr-4 px-2 rounded shadow hover:shadow-gray-900 my-1 grid grid-cols-6 gap-x-2">
        <div className="h-10 w-10 bg-gray-500 animate-pulse rounded-full"></div>
        {/* title */}
        <div className="text-xs col-span-4">{title}</div>
        {/* action buttons */}
        <div className="flex gap-x-3 items-center justify-self-end self-start">
          {ACTIONS.map((v) => {
            return (
              <div>
                <FontAwesomeIcon
                  icon={v.icon}
                  className="text-xs"
                  title={v.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
