"use client";
import React, { ReactElement } from "react";

interface Props {
  season: number;
  races: Array<object>;
}

export default function DashboardRaceSchedule({
  season,
  races
}: Props): ReactElement {
  return (
    <div>
      Dashboard Race Schedule
      <div>{season}</div>
      <div>
        {races.map(race => {
          return race.raceName;
        })}
      </div>
    </div>
  );
}
