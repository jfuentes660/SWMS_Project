import { Card, CardContent } from "./ui/Card";

export function DashboardHeader() {
  const handleOptimizeRoutes = () => {
    // TODO: call backend API or recalculate routes
    console.log("Optimizing routes...");
  };

  return (
    <Card>
      <CardContent className="p-4">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          SMART WASTE MANAGEMENT SYSTEM
        </h1>
        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">2</h2>
            <p>Full Bins</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">92%</h2>
            <p>Avg Fill Level</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">3</h2>
            <p>Collections Today</p>
          </div>
        </div>
        <div className="text-green-400 text-right">
          Last Sync: <span className="font-semibold">2 mins ago</span>
        </div>
        <div className="flex justify-left mb-4">
          <button
            onClick={handleOptimizeRoutes}
            className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl font-semibold transition"
          >
            Optimize Routes
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
