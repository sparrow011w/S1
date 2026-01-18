
import React from 'react';
import { Calendar, MapPin, Users, Ticket } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: "Transatlantic Forum on Antisemitism and Democratic Resilience",
      location: "Washington, D.C.",
      audience: "Government officials, NGOs, media, foundations",
      description: "A high-level public forum addressing antisemitism as a threat to democratic institutions.",
      date: "Fall 2025"
    },
    {
      title: "European Public Conference: Memory, Responsibility, Action",
      location: "Brussels, Belgium",
      audience: "Cultural institutions, educators, policymakers",
      description: "A multi-day conference examining Holocaust memory and the role of public institutions.",
      date: "Spring 2026"
    },
    {
      title: "Jewish Voices in Public Space: Cultural & Educational Series",
      location: "Los Angeles and London",
      audience: "General public, students, cultural leaders",
      description: "A series of public events highlighting Jewish perspectives in arts, media, and civic life.",
      date: "Throughout 2025"
    },
    {
      title: "Youth & Campus Leadership Summit",
      location: "Philadelphia",
      audience: "Students, young professionals, educators",
      description: "An intensive program for emerging leaders addressing antisemitism, advocacy, and ethical engagement.",
      date: "Winter 2025"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-zinc-50 border-b border-gray-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 italic">Upcoming Events</h1>
            <p className="text-xl text-gray-600 mb-4 font-light leading-relaxed">
              2025–2026 Public Initiatives across the United States and Europe.
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 text-sm text-yellow-800 italic">
              Full details and confirmation will be released separately after registration.
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {events.map((event, idx) => (
              <div key={idx} className="group border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-zinc-900 p-8 text-white relative">
                  <div className="absolute top-4 right-4 text-yellow-500">
                    <Calendar className="w-8 h-8 opacity-20" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-500 transition-colors leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm uppercase tracking-widest text-zinc-400 font-bold">{event.date}</p>
                </div>
                <div className="p-8 space-y-6">
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-zinc-800 font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-red-700" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-zinc-800 font-medium">
                      <Users className="w-4 h-4 mr-2 text-zinc-500" />
                      {event.audience}
                    </div>
                  </div>

                  <button className="w-full mt-6 flex items-center justify-center bg-zinc-900 text-white py-3 font-bold hover:bg-zinc-800 transition-colors rounded">
                    <Ticket className="w-5 h-5 mr-2" />
                    Request Registration Link
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Footer */}
      <section className="bg-zinc-950 py-24 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 italic">Host a Briefing?</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            We partner with institutions to provide custom briefings on emerging trends and systemic challenges.
          </p>
          <button className="border-2 border-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-all">
            Inquire About Custom Briefings
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;
