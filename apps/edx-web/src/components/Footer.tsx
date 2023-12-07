import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlackBg from "@/assets/black_bg.jpg";

export default function Footer() {
  const sections = [
    {
      heading: "About",
      links: [
        {
          name: "Docs",
          link: "docs"
        },
        {
          name: "Resources",
          link: "",
        },
        {
          name: "Vision",
          link: "",
        },

        {
          name: "Contact",
          link: "",
        },
      ],
    },
    {
      heading: "Socials",
      links: [
        {
          name: "Facebook",
          link: "",
        },
        {
          name: "StackOverflow",
          link: "",
        },
        {
          name: "Discord",
          link: "",
        },
      ],
    },
    {
      heading: "Legal",
      links: [
        {
          name: "Terms and Conditions",
          link: "",
        },
      ],
    },
  ];
  return (
    <footer className={`border-t-2 relative`}>
      <Image src={BlackBg} className="absolute h-full w-full -z-10 bg-black opacity-10 object-fill bg-blend-multiply" alt=""></Image>
      <div className="max-w-4xl mx-auto flex justify-between py-10">
        {sections.map((section) => {
          return (
            <div className="flex flex-col gap-y-2">
              <h1 className="font-bold text-xl">{section.heading}</h1>
              <ul className="flex flex-col gap-y-2 font-light">
                {section.links.map((link) => {
                  return (
                    <li>
                      <Link href={link.link}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
