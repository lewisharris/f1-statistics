import React, { ReactElement } from "react";

interface Props {}

export default function DashboardNextRaceDetails({}: Props): ReactElement {
  return (
    <div className="bg-[#101317] drop-shadow-lg text-white">
      <div className="flex flex-row px-10 py-6">
        <div className="flex flex-col min-w-[50%]">
          <div className="text-lg text-zinc-500">NEXT RACE DETAILS</div>
          <div className="text-2xl">Great Britain</div>
          <div className="pb-4 text-xs font-thin">
            Forumla 1 Armco British Grand Prix 2023
          </div>
          <div className="flex flex-row justify-between font-thin">
            <div>Practice 1</div>
            <div>14:00</div>
            <div>Thursday 7th July</div>
          </div>
          <div className="flex flex-row  justify-between font-thin">
            <div>Practice 2</div>
            <div>14:00</div>
            <div>Friday 7th July</div>
          </div>
          <div className="flex flex-row justify-between font-thin">
            <div>Practice 3</div>
            <div>14:00</div>
            <div>Friday 8th July</div>
          </div>
          <div className="flex flex-row justify-between font-thin">
            <div>Qualifying</div>
            <div>14:00</div>
            <div>Saturday 9th July</div>
          </div>
        </div>
        <div>Image</div>
      </div>
      <div className="flex flex-row bg-zinc-950 py-3 px-10">
        <div className="mr-auto">Race</div>
        <div className="px-4">14:00</div>
        <div className="px-4">Sunday 9th July</div>
      </div>
    </div>
  );
}
