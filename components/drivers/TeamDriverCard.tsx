"use client";
import React, { ReactElement } from "react";

interface Props {
  driver: any;
}

export default function TeamDriverCard({ driver }: Props): ReactElement {
  console.log(driver);
  return <div>{driver.driverId}</div>;
}
