"use client";
import React, { ReactElement, useState, useEffect } from "react";
import DriverCard from "./DriverCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconContext } from "react-icons";

interface Props {
  driverData: object;
}

export default function DriverCarousel({ driverData }: Props): ReactElement {
  const data = driverData;
  const handleDragStart = (e: any) => e.preventDefault();
  const responsive = {
    0: { items: 3 },
    568: { items: 2 },
    1024: { items: 4 },
    2000: { items: 6 },
  };

  return (
    <>
      <div
        dir="ltr"
        className="absolute bg-gradient-to-r from-[#101317] w-[20%] h-full left-0 top-0 z-10 pointer-events-none rounded-s-lg"
      ></div>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        disableDotsControls
        renderPrevButton={() => {
          return (
            <div className=" h-full w-[10%] absolute top-0 left-0 z-10 flex flex-col justify-center pb-8">
              <IconContext.Provider value={{ color: "white", size: "30px" }}>
                <div>back</div>
              </IconContext.Provider>
            </div>
          );
        }}
        renderNextButton={() => {
          return (
            <div className=" h-full w-[10%] absolute top-0 right-0 z-10 flex flex-col justify-center pb-8">
              <IconContext.Provider value={{ color: "white", size: "30px" }}>
                <div>next</div>
              </IconContext.Provider>
            </div>
          );
        }}
        items={data.map((item) => {
          return (
            <DriverCard
              driverId={item.Driver.driverId}
              familyName={item.Driver.familyName}
              givenName={item.Driver.givenName}
              permanentNumber={item.Driver.permanentNumber}
              points={item.points}
              position={item.position}
              onDragStart={handleDragStart}
              role="presentation"
              key={item.Driver.driverID}
            />
          );
        })}
      />

      <div
        dir="rtl"
        className="absolute bg-gradient-to-l from-[#101317] w-[20%] h-full right-0 top-0 pointer-events-none rounded-s-lg"
      ></div>
    </>
  );
}
