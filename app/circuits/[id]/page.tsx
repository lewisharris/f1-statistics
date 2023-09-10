import "../../globals.css";
import { animated, useSpring } from "react-spring";

export default async function DriverPage({ params }) {
  const { id } = params;
  const circuitRes = await fetch(
    `http://ergast.com/api/f1/circuits/${id}.json`,
    {
      cache: "force-cache",
    }
  );
  const circuit = await circuitRes.json();
  const { circuitName, Location } = circuit.MRData.CircuitTable.Circuits[0];

  return (
    <div className="bg-[#1c1f24] max-w-full sm:p-4 h-screen text-white sm:px-[5vw]">
      <div>
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="flex flex-col">
            <img
              src={`/flags/${Location.country}.png`}
              alt={Location.country}
              className="max-w-[20%] py-4"
            />
            <h1 className="text-6xl font-bold">
              {Location.country.toUpperCase()}
              <span className="text-red-600"> &#39 23</span>
            </h1>
            <div className="flex flex-row min-w-full py-2">
              <h2 className="text-lg text-stone-400 grow">{circuitName}</h2>
              <h2 className="text-lg white">22 August 2023</h2>
            </div>

            <div className="text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row pt-2">
                <p className="grow">PREVIOUS WINNER</p>
                <p className="">Max Versappen</p>
              </div>
              <div className="flex flex-row min-w-full pt-2">
                <p className="grow">LAP RECORD</p>
                <p className="">Lewis Hamilton</p>
              </div>
            </div>
          </div>
          <img
            src="/tracks/Circuit_Zandvoort_F1.png"
            alt="zandvoort"
            className="max-w-[50%]"
          />
        </div>
        <div className="m-0">
          <div className="flex flex-row min-w-full justify-start py-4">
            <h3 className="px-6 cursor-pointer hover:text-red-600">
              Track Overview
            </h3>
            <p className="px-6 cursor-pointer hover:text-red-600">Practice 1</p>
            <p className="px-6 hover:text-red-600">Practice 2</p>
            <p className="px-6 hover:text-red-600">Practice 3</p>
            <p className="px-6 hover:text-red-600">Q1</p>
            <p className="px-6 hover:text-red-600">Q2</p>
            <p className="px-6 hover:text-red-600">Q3</p>
            <p className="px-6 hover:text-red-600">Race</p>
          </div>
          <div className="bg-neutral-950"> tabs</div>
        </div>
      </div>
    </div>
  );
}
