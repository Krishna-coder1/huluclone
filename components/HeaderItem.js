import React from "react";

function HeaderItem({ title, Icon }) {
  return (
    <div className="group flex flex-col w-12 sm:w-20 items-center cursor-pointer mt-2 hover:text-white">
      <Icon className="h-8 mb-1 groups group-hover:animate-bounce"></Icon>
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
