import React from "react";
import { Megaphone, Users, Lock } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      <div className="max-w-3xl bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-800 mb-6">About Water Safety Portal</h1>

        <p className="text-lg text-gray-700 mb-4">
          The Water Safety Portal is designed to help citizens, NGOs, and government
          officials monitor, report, and improve water safety in their communities.
          It provides real-time updates, easy reporting tools, and interactive
          visualizations for water quality data.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Key features of the portal include:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li className="flex items-center"><Lock size={20} className="mr-2 text-indigo-600"/> Secure login for administrators</li>
          <li className="flex items-center"><Users size={20} className="mr-2 text-green-600"/> Access for public users, NGOs, and scientists</li>
          <li className="flex items-center"><Megaphone size={20} className="mr-2 text-amber-500"/> Official announcements and alerts</li>
        </ul>

        <p className="text-lg text-gray-700">
          Our goal is to make water safety transparent, accessible, and actionable
          for everyone. By providing timely information and easy reporting tools,
          we aim to empower communities to take proactive steps for safer water.
        </p>
      </div>
    </div>
  );
}
