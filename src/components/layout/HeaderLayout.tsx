import Link from "next/link";
import React from "react";

const HeaderLayout = () => {
  return (
    <header>
      <nav className="bg-red-300 w-full">
        <ul className="flex justify-between max-w-[1200px] mx-auto p-[10px]">
          <li className="">
            <Link href="/">Main</Link>
          </li>
          <li className="">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLayout;
