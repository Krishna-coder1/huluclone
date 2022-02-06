import React, { useState } from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
const URLB = "https://image.tmdb.org/t/p/original/";
let text = "Read More";

function Thumbnail({ result }) {
  const [isTruncate, updateState] = useState(true);
  function disableTruncate() {
    if (isTruncate) {
      text = "Read Less";
      updateState(false);
    } else if (!isTruncate) {
      text = "Read More";
      updateState(true);
    }
  }

  return (
    <div
      className="p-3 group transition duration-200 ease-in transform sm:hover:scale-105
    hover:z-50 "
    >
      <Image
        layout="responsive"
        lazyBoundary=""
        height={900}
        width={1000}
        src={URLB + result?.poster_path || URLB + result?.backdrop_path}
      ></Image>
      <div className="p-2">
        <p className={isTruncate ? "truncate" : "max-w-md"}>
          {result.overview}
        </p>
        <span
          id="desc"
          onClick={disableTruncate}
          className="underline hover:cursor-pointer"
        >
          {text}
        </span>
        <h2 className="text-white group-hover:font-bold mt-1 text-2xl">
          {result.title}
        </h2>
        <p className=" flex opacity-0 group-hover:opacity-100 transition items-center">
          {result.release_date + ""}
          <ThumbUpIcon
            className="h-5 mx-2 hover:text-bold"
            height={20}
          ></ThumbUpIcon>
          <span> {result.vote_count}</span>
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;

//backdrop_path poster_path
