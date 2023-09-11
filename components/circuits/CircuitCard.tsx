"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  circuitId: string;
  name: string;
  location: { lat: string; long: string; locality: string; country: string };
};

export default function CircuitCard({ circuitId, name, location }: Props) {
  const router = useRouter();
  return (
    <div>
      <div>{circuitId}</div>
      <button onClick={() => router.push(`/circuits/${circuitId}`)}>
        {name}
      </button>
    </div>
  );
}
