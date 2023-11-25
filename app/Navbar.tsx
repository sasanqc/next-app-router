import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className=" bg-indigo-700 text-red-50 flex gap-5 p-8  top-0">
        <li className="">
          <Link href={"/"}>LOGO</Link>
        </li>
        <li className="">
          <Link href={"/"}>Dashboard</Link>
        </li>
        <li className="">
          <Link href={"/issues"}>Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
