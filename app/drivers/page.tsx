import "../globals.css";
import TeamDriverCard from "../../components/drivers/TeamDriverCard";

export default async function Drivers() {
  const driversDataRes = await fetch(
    "http://ergast.com/api/f1/2023/drivers.json",
    {
      cache: "force-cache",
    }
  );
  const driversData = await driversDataRes.json();
  const currentDrivers = driversData?.MRData?.DriverTable?.Drivers.map(
    (driver) => {
      return <TeamDriverCard driver={driver} key={driver.driverId} />;
    }
  );
  // Get and sort constructors
  // Get and add driver to constructors
  // Create constuctor container and add drivers to container

  console.log(currentDrivers);
  return (
    <div className="bg-[#1c1f24] max-w-full sm:p-4 h-screen">
      <div>Carousel</div>
      <div>2023 Drivers</div>
      <div>{currentDrivers}</div>
    </div>
  );
}
