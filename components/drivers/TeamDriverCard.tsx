"use client";
import React, { ReactElement } from "react";
import { useRouter } from "next/navigation";

interface Props {
  driver: any;
}

export default function TeamDriverCard({ driver }: Props): ReactElement {
  const router = useRouter();
  console.log(driver);
  const driverNumber = driver.permanentNumber;
  return (
    <div
      onClick={() => {
        router.push({ pathname: `/drivers/${driverNumber}`, query: driver });
      }}
    >
      {driver.driverId}
    </div>
  );
}
