import React from "react";

type Props = {};

export default function TopSlider({}: Props) {
  return (
    <div className="text-white w-full border-red-600  border-2 p-2 ">
      <div className="bg-red-200 p-4 w-44 rounded-xl">
        <div className="">image</div>
        <div className="">
          <div className="">number</div>
          <div className="">Divider</div>
          <div className="">
            <div className="">Name</div>
            <div className="">pts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
