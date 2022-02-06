import React from "react";
import Thumbnail from "./Thumbnail";
function Results({ results }) {
  return (
    <div className="px-5 pt-5 sm:grid  md:grid-cols-3 xl:grid-cols-4 3xl:flex justify-center flex-wrap">
      {results.map((result) => {
        return <Thumbnail key={result.id} result={result}></Thumbnail>;
      })}
    </div>
  );
}

export default Results;
