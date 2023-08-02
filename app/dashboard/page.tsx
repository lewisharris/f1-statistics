import "../globals.css";
import DashboardLeaderboard from "../../components/dashboard/DashboardLeaderboard";
import DashboardLatestResults from "../../components/dashboard/DashboardLatestResults";
import DashboardNextRaceDetails from "../../components/dashboard/DashboardNextRaceDetails";
import DashboardRaceSchedule from "../../components/dashboard/DashboardRaceSchedule";

export default function Dashboard() {
  return (
    <main className="bg-[#1c1f24] w-full p-4">
      <div className="">
        <DashboardLeaderboard />
        <DashboardLeaderboard />
        <div className="grid auto-cols-auto gap-6">
          <DashboardLatestResults />
          <DashboardNextRaceDetails />
          <DashboardRaceSchedule />
        </div>
      </div>
    </main>
  );
}
