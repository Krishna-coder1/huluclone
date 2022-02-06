import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function header() {
  return (
    <div className="flex justify-between sm:flex-row flex-col mt-2 items-center">
      <div className="flex justify-evenly flex-grow max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon}></HeaderItem>
        <HeaderItem title="Trending" Icon={LightningBoltIcon}></HeaderItem>
        <HeaderItem title="Verified" Icon={BadgeCheckIcon}></HeaderItem>
        <HeaderItem title="Collections" Icon={CollectionIcon}></HeaderItem>
        <HeaderItem title="Search" Icon={SearchIcon}></HeaderItem>
        <HeaderItem title="Account" Icon={UserIcon}></HeaderItem>
      </div>
      <Image
        height={100}
        width={200}
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="icon"
      ></Image>
    </div>
  );
}

export default header;
