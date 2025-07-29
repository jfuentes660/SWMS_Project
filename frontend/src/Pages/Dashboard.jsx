import Sidebar from "../Components/Sidebar";
import { MapWithRoutes } from "../Components/MapWithRoutes"; 
import { DashboardHeader } from "../Components/DashBoardHeader";
import { AlertsPanel } from "../Components/AlertsPanel";
import { FillLevelChart } from "../Components/FillLevelChart";
import { CollectionEfficiencyTable } from "../Components/CollectionEfficiencyTable";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 grid grid-cols-1">
        <DashboardHeader />
        <div className="flex p-1">
          <MapWithRoutes />
        </div>
        <div className="grid grid-cols-2 p-2 gap-2">
          <AlertsPanel />
          <FillLevelChart />
        </div>
        <CollectionEfficiencyTable />
      </main>
    </div>
  );
}
