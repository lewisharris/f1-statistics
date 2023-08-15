import { useEffect, useState } from "react";
import DriverCarousel from "./DriverCarousel";

type Props = {};

export default async function DashboardDriverLeaderboard({}: Props) {
  const driverStandingsRes = await fetch(
    "http://ergast.com/api/f1/current/driverStandings.json"
  );
  const driverStandingsData = await driverStandingsRes.json();

  return (
    <div className="m-2 sm:m-4 flex flex-col bg-[#101317] sm:pt-2 drop-shadow-2xl text-white min-w-[40%] rounded-2xl">
      <h4 className="text-xs py-2 sm:py-0 sm:text-lg px-6 text-zinc-500 z-20">
        DRIVERS STANDINGS
      </h4>
      <DriverCarousel
        driverData={
          driverStandingsData.MRData.StandingsTable.StandingsLists[0]
            .DriverStandings
        }
      />
    </div>
  );
}
