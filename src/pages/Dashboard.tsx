import React from "react";
// import india-map from ./assets/india-map
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import { Megaphone } from "lucide-react";

// Sample HMPI Trend Data
const trendData = [
  { date: "2025-07-01", hmpi: 25 },
  { date: "2025-08-01", hmpi: 40 },
  { date: "2025-09-01", hmpi: 35 },
  { date: "2025-10-01", hmpi: 50 },
];

// Sample Water Quality Pie Data
const waterQualityData = [
  { name: "Safe", value: 60 },
  { name: "Moderate", value: 25 },
  { name: "Hazardous", value: 15 },
];

const COLORS = ["#4CAF50", "#FFEB3B", "#F44336"];

// Sample Contaminant Data
const contaminantData = [
  { contaminant: "Arsenic", Delhi: 5, Mumbai: 8, Chennai: 2 , Hyderabad : 4 , Kolkata:3 },
  { contaminant: "Lead", Delhi: 2, Mumbai: 4, Chennai: 1 , Hyderabad : 3 , Kolkata:6 },
  { contaminant: "Cadmium", Delhi: 1, Mumbai: 2, Chennai: 0 , Hyderabad : 9 , Kolkata:3 },
];

// Additional small pie charts data
const smallPieCharts = [
  { name: "Fluoride", value: 20 },
  { name: "Nitrate", value: 30 },
  { name: "TDS", value: 50 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8">
      <header className="bg-indigo-600 text-white p-4 rounded shadow flex items-center space-x-2">
        <Megaphone size={20} />
        <h1 className="text-xl font-bold"> Dashboard</h1>
      </header>

      {/* Main Large Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* HMPI Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">HMPI Trend Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="hmpi" stroke="#1E40AF" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Water Quality Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Water Quality Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={waterQualityData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {waterQualityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Contaminant Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Contaminant Levels Across Cities</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={contaminantData}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="contaminant" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Delhi" fill="#4CAF50" />
            <Bar dataKey="Mumbai" fill="#FFEB3B" />
            <Bar dataKey="Hyderabad" fill="#e39a18" />            
            <Bar dataKey="Chennai" fill="#F44336" />            
            <Bar dataKey="Kolkata" fill="#2818e3" />            
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* India Map + Small Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* India Map Block - BIG */}
        <div className="bg-white p-4 rounded-xl shadow col-span-1 lg:col-span-2 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-2">India Map</h3>
          <img
            src="./assets/india-map.jpg" // add your India map image in public folder
            alt="India Map"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Small Pie Charts */}
        {smallPieCharts.map((data, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">{data.name} Levels</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={[data, { name: "Remaining", value: 100 - data.value }]}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={60}
                  fill="#8884d8"
                  label
                >
                  <Cell fill="#1E40AF" />
                  <Cell fill="#E5E7EB" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
