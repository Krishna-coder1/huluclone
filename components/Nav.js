import React from "react";
import request from "../utils/request";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex sm:px-20 px-10 whitespace-nowrap text-2xl space-x-10 sm:space-x-20 overflow-scroll no-scrollbar overflow-y-hidden">
        {Object.entries(request).map(([key, { title, url }]) => {
          return (
            <h2
              onClick={() => router.push("/?genre=" + key)}
              className="hover:scale-125 cursor-pointer hover:text-white transform transition duration-200"
              key={key}
            >
              {title}
            </h2>
          );
        })}
        <div className=" absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"></div>
      </div>
    </nav>
  );
}

export default Nav;
