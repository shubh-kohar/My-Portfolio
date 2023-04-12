import React from "react";

function MainContentArea() {
  return (
    <div className="flex-col flex flex-1  items-center p-3">
      <img
        src="https://avatars.githubusercontent.com/u/130543588?v=4"
        // eslint-disable-next-line
        alt="Shubhajeet_Kohar`s"
        className="rounded-full aspect-square w-60
    "
      />
      <h1 className="text-6xl flex flex-col font-bold my-3">
        <span>hello there, i'm</span>
        <span className="text-teal-700">Shubhajeet Kohar</span>
      </h1>

      <button className="bg-teal-600 p-3 my-5 text-xl font-bold">Connect Now</button>
    </div>
  );
}

export default MainContentArea;
