import "../../globals.css";
import { useRouter } from "next/navigation";

export default async function DriverPage({ params }) {
  const { id } = params;
  console.log(id);

  return (
    <div className="bg-[#1c1f24] max-w-full sm:p-4 h-screen">
      <h1>Driver Name</h1>
      <h2>Driver Constructor</h2>
    </div>
  );
}
