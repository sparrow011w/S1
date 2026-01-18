
import React from 'react';
import { Newspaper, Megaphone, MapPin, Sparkles, Flag, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const serviceDetails = [
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Strategic Public Relations",
      description: "High-level strategy for advocacy organizations in politically sensitive environments.",
      points: [
        "Shape narratives around Jewish identity",
        "Support advocacy with defensible messaging",
        "Crisis communications & rapid response",
        "Thought leadership & op-ed development",
        "Transatlantic media alignment"
      ]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Public Events for Change",
      description: "Events as tools of education, mobilization, and policy influence.",
      points: [
        "International policy forums",
        "Public briefings for government",
        "Commemorations & ceremonies",
        "University engagement programs",
        "Logistics & security management"
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Fighting Antisemitism",
      description: "Addressing disinformation, extremism, and historical distortion globally.",
      points: [
        "Monitor political rhetoric",
        "Address educational incidents",
        "Combat Holocaust distortion",
        "Counter online radicalization",
        "Coalition-driven action"
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Elevating the Jewish World",
      description: "Moving beyond defense to affirmative visibility of Jewish life.",
      points: [
        "Highlight collective memory",
        "Contemporary cultural voices",
        "Diaspora experience visibility",
        "Contributions to democratic values",
        "Education across diverse national contexts"
      ]
    }
  ];

  return (
    <div className="bg-zinc-50 min-h-screen animate-in fade-in duration-1000">
      {/* Header */}
      <section className="bg-zinc-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 italic">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A structured, multidisciplinary workflow designed to transform public submissions into responsible, meaningful, and actionable insight.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceDetails.map((service, idx) => (
              <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-shadow border-t-4 border-zinc-900">
                <div className="text-red-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8">{service.description}</p>
                <ul className="space-y-3">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center text-sm text-zinc-700">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transatlantic Approach */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold italic mb-4">Our Transatlantic Approach</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Flag className="w-10 h-10 text-red-700" />
                <h3 className="text-3xl font-bold">In the United States</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Focus on civic engagement, campus programming, and high-velocity media strategy. We insist on institutional responsibility while recognizing fundamental free speech protections.
              </p>
              <div className="bg-zinc-50 p-6 rounded-lg border-l-4 border-red-700">
                <h4 className="font-bold mb-2">Key Areas:</h4>
                <ul className="text-sm space-y-2 text-zinc-700">
                  <li>• Public advocacy & civil rights coalition building</li>
                  <li>• Youth-focused ethical engagement programs</li>
                  <li>• Institutional accountability frameworks</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Globe className="w-10 h-10 text-zinc-900" />
                <h3 className="text-3xl font-bold">In Europe</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Engagement with governmental and intergovernmental institutions, bridging historical memory with contemporary realities across diverse regional sensitivities.
              </p>
              <div className="bg-zinc-50 p-6 rounded-lg border-l-4 border-zinc-900">
                <h4 className="font-bold mb-2">Key Areas:</h4>
                <ul className="text-sm space-y-2 text-zinc-700">
                  <li>• EU-level policy engagement & education</li>
                  <li>• Historical remembrance & Holocaust memory preservation</li>
                  <li>• Regional cultural initiatives tailored to local legal frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
