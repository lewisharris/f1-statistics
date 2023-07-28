import "./globals.css";
import DashboardDriverLeaderboard from "../components/dashboard/DashboardDriverLeaderboard";

export default function Home() {
  return (
    <main className="bg-green-400 w-full">
      <div className="">
        Dashboard
        <div className="">
          <DashboardDriverLeaderboard />
          <div>Drivers Standings</div>
          <div>Constructors Standings</div>
          <div>Latest Race Results</div>
          <div>Next Race Details</div>
          <div>Race Schedule</div>
        </div>
      </div>
    </main>
  );
}
