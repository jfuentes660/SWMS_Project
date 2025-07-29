import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";

export default function DataPage() {
  // Mock user role (replace with actual user role from context, redux, or API)
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // TODO: Fetch user role from API or global state
    // For demo, Assume a non-admin user after 500ms
    setTimeout(() => {
      setUserRole("user"); // or "admin"
    }, 500);
  }, []);

  // Handlers (TODO: implement real logic)
  const handleGenerateRoute = () => alert("Route generation requested!");
  const handleResetSensors = () => alert("Sensor reset requested!");

  const handleRequestRoute = () => alert("Request sent for new route.");
  const handleRequestSensorReset = () => alert("Request sent for sensor reset.");

  if (!userRole) {
    return (
      <div className="p-8 text-white text-center text-xl">
        Loading user data...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-6">
          Data Management
        </h2>

        {/* Admin buttons */}
        {userRole === "admin" && (
          <>
            <div className="space-x-4 mb-8">
              <button
                onClick={handleGenerateRoute}
                className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl font-semibold transition"
              >
                Generate New Route
              </button>
              <button
                onClick={handleResetSensors}
                className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl font-semibold transition"
              >
                Reset Sensors
              </button>
            </div>

            <h3 className="text-2xl font-bold mb-4">Admin Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="bg-cyan-600 hover:bg-cyan-700 p-3 rounded-xl transition">
                {/* TODO: Navigate to manage routes */}
                • Manage Routes
              </button>
              <button className="bg-cyan-600 hover:bg-cyan-700 p-3 rounded-xl transition">
                {/* TODO: Navigate to view route requests */}
                • View Route Requests
              </button>
              <button className="bg-cyan-600 hover:bg-cyan-700 p-3 rounded-xl transition">
                {/* TODO: Navigate to manage sensors */}
                • Manage Sensors
              </button>
            </div>
          </>
        )}

        {/* Non-admin user request buttons */}
        {userRole !== "admin" && (
          <div className="space-x-4 mb-8">
            <button
              onClick={handleRequestRoute}
              className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl font-semibold transition"
            >
              Request New Route
            </button>
            <button
              onClick={handleRequestSensorReset}
              className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl font-semibold transition"
            >
              Request Sensor Reset
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
