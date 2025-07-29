import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/Card";
import { fetchBinData } from "../api/binApi";

export function AlertsPanel() {
  const [binData, setBinData] = useState([]);
  // TEMPORARY bin data (mock)
/*   const binData = [
    { id: "103", location: "Elm St & 7th Ave", status: "FULL", days: 2, level: 99 },
    { id: "207", location: "7th Avenue", status: "95%", days: 1.9, level: 95 },
    { id: "191", location: "7th Ave 191", status: "Error", days: 1.8, level: "OFF" },
    { id: "312", location: "Maple Blvd", status: "88%", days: 1.5, level: 88 },
    { id: "415", location: "Pine & 4th St", status: "FULL", days: 2.2, level: 100 },
    { id: "527", location: "Cedar Lane", status: "73%", days: 1.2, level: 73 },
    { id: "638", location: "Oak St", status: "67%", days: 1.0, level: 67 },
    { id: "749", location: "Main St & 2nd Ave", status: "92%", days: 1.7, level: 92 },
    { id: "850", location: "Riverwalk Park", status: "FULL", days: 2.4, level: 100 },
    { id: "961", location: "Market Square", status: "80%", days: 1.4, level: 80 },
  ]; */
   useEffect(() => {
    const loadData = async () => {
      const data = await fetchBinData();
      setBinData(data);
    };
    loadData();
  }, []); 

  // ---------------------------changing the above code to replace mock data with API call - Jfuentes 
  // Filter bins to show alerts  
  const alerts = binData.filter(
    (bin) =>
      bin.status === "FULL" ||
      bin.status === "Error" ||
      (typeof bin.level === "number" && bin.level >= 85)
  );

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="font-semibold text-lg mb-2">Alerts</h2>
        <ul className="space-y-2">
          {alerts.length === 0 ? (
            <li className="text-gray-400">No alerts</li>
          ) : (
            alerts.map((bin) => {
              let color = "text-yellow-400";
              if (bin.status === "FULL") color = "text-red-400";
              else if (bin.status === "Error") color = "text-blue-400";

              return (
                <li key={bin.id} className={color}>
                  BIN {bin.id} -{" "}
                  {bin.status === "FULL"
                    ? "FULL!"
                    : bin.status === "Error"
                      ? "Sensor Error"
                      : `${bin.status} Approaching Limit`}
                </li>
              );
            })
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
