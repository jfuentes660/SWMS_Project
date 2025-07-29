import React from "react";
import { Card, CardContent } from "./ui/Card";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Label, ResponsiveContainer, CartesianGrid, Area
} from "recharts";

// Sample data: weekly fill level & average
const fillLevelData = [
  { time: "Week 1", level: 60, avg: 50 },
  { time: "Week 2", level: 25, avg: 40 },
  { time: "Week 3", level: 90, avg: 55 },
  { time: "Week 4", level: 65, avg: 60 },
  { time: "Week 5", level: 30, avg: 50 },
  { time: "Week 6", level: 85, avg: 65 },
  { time: "Week 7", level: 100, avg: 70 },
];

export function FillLevelChart() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold text-cyan-400 mb-4">Fill Level Over Time</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={fillLevelData}>
            <defs>
              <linearGradient id="levelGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="time" stroke="#ccc">
              <Label
                value="Time (Weeks)"
                offset={-5}
                position="insideBottom"
                style={{ fill: "#ccc", fontSize: 12 }}
              />
            </XAxis>
            <YAxis stroke="#ccc" domain={[0, 100]}>
              <Label
                value="Fill Level (%)"
                angle={-90}
                position="insideLeft"
                style={{ fill: "#ccc", fontSize: 12 }}
              />
            </YAxis>
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
              labelStyle={{ color: "#a5f3fc" }}
              cursor={{ stroke: "#06b6d4", strokeWidth: 2 }}
            />
            <Area
              type="monotone"
              dataKey="level"
              stroke="#06b6d4"
              fill="url(#levelGradient)"
              strokeWidth={2}
              dot={{ r: 4, stroke: "#06b6d4", fill: "#06b6d4" }}
              activeDot={{ r: 6 }}
              animationDuration={1200}
            />
            <Line
              type="monotone"
              dataKey="avg"
              stroke="#facc15"         // amber color for contrast
              strokeWidth={2}
              dot={{ r: 3, stroke: "#facc15", fill: "#facc15" }}
              activeDot={{ r: 5 }}
              animationDuration={1200}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
