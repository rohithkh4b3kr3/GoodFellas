import React from "react";
import { Lock, Users, AlertCircle, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  const cards = [
  {
    id: 1,
    title: "Admin Login",
    description: "Access for authorized government administrators.",
    icon: <Lock size={42} className="text-indigo-600" />,
    route: "/login/admin",
  },
  {
    id: 2,
    title: "Public / NGO Login",
    description: "Login for citizens, NGOs, and organizations.",
    icon: <Users size={42} className="text-gray-600" />,
    route: "/login/public",
  },
  {
    id: 3,
    title: "Scientist Login",
    description: "Scientist portal to calculate",
    icon: <Users size={42} className="text-blue-950" />,
    route: "/login/scientist",
  },
  {
    id: 4,
    title: "Announcements",
    description: "Latest official updates and notifications.",
    icon: <Megaphone size={42} className="text-amber-500" />,
    route: "/announcements",
  },
];

  

  return (
    <div className="min-h-screen text-slate-900 flex flex-col items-center p-10">
      {/* ANNOUNCEMENTS TICKER */}
      <section className="w-full text-black py-3 mb-12 rounded-lg shadow-md overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-lg font-semibold tracking-wide"> 
          <Megaphone size={25} className="text-amber-500 inline-block mr-2" />
          Announcements :
          &nbsp;&nbsp; Water quality reports for October released. &nbsp;&nbsp; | &nbsp;&nbsp;
          New AI-powered HMPI calculator is live. &nbsp;&nbsp; | &nbsp;&nbsp;
          NGOs can now upload bulk CSV test data. &nbsp;&nbsp; | &nbsp;&nbsp;
          Early warning alerts activated for arsenic contamination.
        </div>
      </section>

      {/* MAIN GRID */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(card.route)}
            className="bg-white border-2 border-indigo-200 rounded-2xl p-10 shadow-lg transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="flex items-center space-x-4 mb-6">
              {card.icon}
              <h3 className="text-2xl font-bold text-indigo-800">{card.title}</h3>
            </div>
            <p className="text-lg leading-relaxed text-slate-700">
              {card.description}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}
