import "../globals.css";
import DashboardLeaderboard from "../../components/dashboard/DashboardLeaderboard";
import DashboardLatestResults from "../../components/dashboard/DashboardLatestResults";
import DashboardNextRaceDetails from "../../components/dashboard/DashboardNextRaceDetails";
import DashboardRaceSchedule from "../../components/dashboard/DashboardRaceSchedule";

export default async function Dashboard() {
  const [latestResultsRes, raceSeasonRes] = await Promise.all([
    fetch("https://ergast.com/api/f1/current/last/results.json", {
      cache: "no-store"
    }),
    fetch("http://ergast.com/api/f1/current.json", {
      cache: "no-store"
    })
  ]);
  const [latestResults, raceSeason] = await Promise.all([
    latestResultsRes.json(),
    raceSeasonRes.json()
  ]);
  return (
    <main className="bg-[#1c1f24] w-full p-4">
      <div className="flex flex-row">
        <DashboardLeaderboard />
        <DashboardLeaderboard />
      </div>
      <div className="grid auto-cols-auto gap-6">
        <DashboardLatestResults data={latestResults.MRData} />
        <DashboardNextRaceDetails races={raceSeason.MRData.RaceTable.Races} />
        <DashboardRaceSchedule
          season={raceSeason.MRData.RaceTable.season}
          races={raceSeason.MRData.RaceTable.Races}
        />
      </div>
    </main>
  );
}
