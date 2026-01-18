
import React from 'react';
import { Search, Shield, Zap, FileText } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20 animate-in fade-in duration-700">
      <section className="py-24 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-8">Operational Methodology</h1>
          <p className="text-xl text-zinc-400 font-medium leading-relaxed">
            Sparrow Agency operates through a structured, multidisciplinary workflow designed to transform public submissions into responsible, meaningful, and actionable insight.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-10 h-10 text-red-600" />,
                title: "VERIFICATION",
                desc: "Rigorous verification of all submissions through OSINT and direct investigation."
              },
              {
                icon: <Shield className="w-10 h-10 text-red-600" />,
                title: "STRUCTURE",
                desc: "Transforming raw data into meaningful intelligence following legal standards."
              },
              {
                icon: <Zap className="w-10 h-10 text-red-600" />,
                title: "ACTION",
                desc: "Strategic mobilization of PR tools to ensure institutional accountability."
              },
              {
                icon: <FileText className="w-10 h-10 text-red-600" />,
                title: "CONSISTENCY",
                desc: "Clarity, security, and consistency across every stage of the process."
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-zinc-900 border border-zinc-800">
                <div className="mb-8">{item.icon}</div>
                <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-12 text-center">Intelligence Workflow</h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="w-12 h-12 rounded-full border border-red-600 flex items-center justify-center shrink-0 text-red-600 font-black italic">01</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase">Intake & Secure Handling</h3>
                <p className="text-zinc-400 leading-relaxed">Submissions are received through encrypted channels and undergo immediate anonymization where required.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-12 h-12 rounded-full border border-red-600 flex items-center justify-center shrink-0 text-red-600 font-black italic">02</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase">Multidisciplinary Review</h3>
                <p className="text-zinc-400 leading-relaxed">Teams of researchers, legal experts, and analysts evaluate the context and validity of the information.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-12 h-12 rounded-full border border-red-600 flex items-center justify-center shrink-0 text-red-600 font-black italic">03</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase">Strategic Activation</h3>
                <p className="text-zinc-400 leading-relaxed">Verified intelligence is channeled into PR strategy, policy briefings, or event mobilization to drive impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;
