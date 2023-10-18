import "./globals.css";
import DashboardLeaderboard from "../components/dashboard/DashboardLeaderboard";
import DashboardLatestResults from "../components/dashboard/DashboardLatestResults";
import DashboardNextRaceDetails from "../components/dashboard/DashboardNextRaceDetails";
import DashboardRaceSchedule from "../components/dashboard/DashboardRaceSchedule";
import DashboardSeasonGraph from "../components/dashboard/DashboardSeasonGraph";

export default async function Dashboard() {
  const [latestResultsRes, raceSeasonRes] = await Promise.all([
    fetch("https://ergast.com/api/f1/current/last/results.json", {
      cache: "no-store",
    }),
    fetch("http://ergast.com/api/f1/current.json", {
      cache: "no-store",
    }),
  ]);
  const [latestResults, raceSeason] = await Promise.all([
    latestResultsRes.json(),
    raceSeasonRes.json(),
  ]);
  return (
    <div className="bg-[#1c1f24] max-w-[100vw] max-h-[100vh] overflow-scroll sm:p-4">
      <div className="flex flex-col sm:flex-row min-w-full">
        <DashboardLeaderboard raceData={raceSeason.MRData} />
        <DashboardLeaderboard raceData={raceSeason.MRData} />
      </div>
      <div className="flex flex-col sm:flex-row">
        <DashboardLatestResults data={latestResults.MRData} />
        <div>
          <DashboardNextRaceDetails races={raceSeason.MRData.RaceTable.Races} />
          <DashboardSeasonGraph />
          <DashboardSeasonGraph />
        </div>
        <DashboardRaceSchedule
          season={raceSeason.MRData.RaceTable.season}
          races={raceSeason.MRData.RaceTable.Races}
        />
      </div>
    </div>
  );
}
