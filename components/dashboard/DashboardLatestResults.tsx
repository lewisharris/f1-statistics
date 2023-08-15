"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { animated } from "@react-spring/web";
import Loading from "../generic/Loading";
import Error from "../generic/Error";
import Link from "next/link";

interface DriverProps {
  fastestLap: object;
  position: number;
  firstName: string;
  lastName: string;
  status: string;
  permanentNumber: string;
}
const Driver = ({
  fastestLap,
  position,
  firstName,
  lastName,
  status,
  permanentNumber
}: DriverProps): ReactElement => {
  return (
    <Link href={`/drivers/${permanentNumber}`}>
      <animated.div className="flex flex-row py-2 text-white text-sm border-b-[1px] border-zinc-900 h-9">
        <div className="pr-1">{position}</div>
        <div className="pr-2 text-zinc-400">|</div>
        <div className="flex flex-row">
          <div
            className={`px-1 font-light ${
              fastestLap?.rank === "1" ? "text-violet-500" : "text-white"
            }`}
          >
            {firstName}
          </div>
          <div
            className={`font-bold ${
              fastestLap?.rank === "1" ? "text-violet-500" : "text-white"
            }`}
          >
            {lastName}
          </div>
        </div>
        <div
          className={`ml-auto ${
            fastestLap?.rank === "1" ? "text-violet-500" : "text-white"
          }`}
        >
          {status === "R"
            ? "DNF"
            : fastestLap?.Time
            ? fastestLap.Time.time
            : null}
        </div>
      </animated.div>
    </Link>
  );
};

interface DashboardLatestResultsProps {
  data: object;
}

export default function DashboardLatestResults({
  data
}: DashboardLatestResultsProps): ReactElement {
  const [raceResults, setRaceResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const setDriverData = async () => {
      await setRaceResults(data.RaceTable.Races[0]);
      setIsLoading(false);
    };
    setDriverData();
  }, []);

  return (
    <div className="flex flex-col bg-[#101317] drop-shadow-2xl p-6 m-4 rounded-2xl grow shrink-0">
      <h3 className="text-lg text-zinc-500">LATEST RACE RESULTS</h3>
      <div className="text-white text-xs py-2">
        {raceResults.raceName?.toUpperCase()}
      </div>
      <div>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <>
            {[...Array(20)].map(i => {
              return (
                <div
                  className="flex flex-row py-2 text-white text-sm h-9 relative"
                  key={i}
                ></div>
              );
            })}
            <Error refresh={fetchResults} />
          </>
        ) : (
          raceResults.Results?.map(driver => {
            return (
              <Driver
                position={driver.position}
                lastName={driver.Driver.familyName}
                firstName={driver.Driver.givenName}
                fastestLap={driver.FastestLap}
                status={driver.positionText}
                key={driver.position}
                permanentNumber={driver.Driver.permanentNumber}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
