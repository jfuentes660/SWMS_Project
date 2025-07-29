import React from "react";
import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

const binData = [
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
];


export function CollectionEfficiencyTable() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="font-semibold text-lg mb-2">Collection Efficiency</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-cyan-400 text-left">
              <th>Bin ID</th>
              <th>Location</th>
              <th>Status</th>
              <th>Last Emptied</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {binData.map((bin) => (
              <tr key={bin.id} className="border-t border-gray-700">
                <td>{bin.id}</td>
                <td>{bin.location}</td>
                <td>
                  <Badge variant="secondary">{bin.status}</Badge>
                </td>
                <td>{bin.days}wk ago</td>
                <td>{bin.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
