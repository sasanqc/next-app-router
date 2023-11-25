"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  const path = usePathname();
  const links = [
    { lable: "Dashboard", path: "/" },
    { lable: "Issues", path: "/issues" },
  ];

  return (
    <nav>
      <ul className=" bg-indigo-700 text-red-50 flex gap-5 p-8">
        {links.map((link) => (
          <li key={link.lable}>
            <Link
              href={link.path}
              className={classNames({
                "pb-1 border-b-[2px]": path === link.path,
              })}
            >
              {link.lable}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
