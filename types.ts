export type Race = {
  Circuit: Circuit;
  FirstPractice: Event;
  Qualifying: Event;
  SecondPractice: Event;
  ThirdPractice: Event;
  Sprint: Event;
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
};

export type Circuit = {
  Location: Location;
  circuitId: string;
  circuitName: string;
  url: string;
};

export type Location = {
  country: string;
  lat: string;
  locality: string;
  long: string;
};

export type Event = {
  date: string;
  time: string;
};

export type Constructor = {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
};

export type Driver = {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
};

export type Position = {
  Constructor: Constructor;
  Driver: Driver;
  FastestLap: { AverageSpeed: { units: string; speed: string } };
  Time: { millis: string; time: string };
  grid: string;
  laps: string;
  number: string;
  points: string;
  position: string;
  positionText: string;
  status: string;
};

export type RaceResults = {
  Circuit: Circuit;
  Results: Array<Position>;
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
};
