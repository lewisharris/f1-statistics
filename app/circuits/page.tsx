import "../globals.css";
import CircuitCard from "../../components/circuits/CircuitCard";

export default async function Circuits() {
  const circuitsDataRes = await fetch(
    "http://ergast.com/api/f1/2023/circuits.json",
    {
      cache: "force-cache",
    }
  );
  const circuitsData = await circuitsDataRes.json();
  console.log(circuitsData);
  return (
    <div className="bg-[#1c1f24] max-w-full sm:p-4 h-screen ">
      Circuits page
      {circuitsData?.MRData?.CircuitTable.Circuits.map(
        ({
          circuitId: circuitId,
          circuitName: name,
          Location: location,
        }: {
          circuitId: String;
          circuitName: string;
          Location: object;
        }) => {
          return (
            <CircuitCard
              key={circuitId}
              circuitId={circuitId}
              name={name}
              location={location}
            />
          );
        }
      )}
    </div>
  );
}
