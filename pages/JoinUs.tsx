
import React from 'react';
import { Briefcase, Gavel, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';

const JoinUs: React.FC = () => {
  const categories = [
    { title: "Media Professionals", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "IT Specialists", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "Graphic Designers", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "Video Editors", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "AI & Data Experts", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "Content Writers", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "Researchers", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "Creative Strategists", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "Digital Organizers", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "Technical Support", icon: <CheckCircle2 className="w-4 h-4" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-zinc-900 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 italic">Professional Partnerships</h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            To expand the reach and effectiveness of our work, Sparrow Agency is seeking dedicated groups of professional service providers whose expertise can strengthen our operations.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-zinc-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 italic">Collaborative Expertise</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">We Actively Partner With Teams in:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="p-6 bg-white shadow-sm flex flex-col items-center justify-center text-center rounded border border-gray-100 hover:border-yellow-600 transition-all group cursor-default">
                <div className="mb-3 text-red-700 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <p className="font-bold text-sm tracking-tighter text-zinc-800">{cat.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="bg-red-700 text-white px-10 py-5 font-bold rounded shadow-2xl hover:bg-red-800 hover:-translate-y-1 transition-all flex items-center mx-auto group">
              Apply to the Service Provider Program
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[10px] text-gray-400 mt-6 uppercase tracking-[0.3em] font-bold">Link to form will be provided upon initial vetting</p>
          </div>
        </div>
      </section>

      {/* Why Sparrow & Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center mb-8 border-b-2 border-yellow-600 pb-4 inline-block">
                <Briefcase className="w-8 h-8 text-zinc-900 mr-4" />
                <h2 className="text-3xl font-bold italic">Our Standards</h2>
              </div>
              <p className="text-gray-500 mb-10 leading-relaxed italic">
                Professionals collaborating with Sparrow Agency follow a shared set of standards that maintain excellence and consistency.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Accuracy", desc: "All outputs must be grounded in verified information and clear methodology." },
                  { title: "Security", desc: "Data is handled within secure, encrypted environments to protect staff and community." },
                  { title: "Neutrality & Integrity", desc: "Content must be produced without bias, distortion, or sensationalism." },
                  { title: "Accessibility", desc: "Final materials must be understandable to diverse audiences including institutions." },
                  { title: "Ethical Responsibility", desc: "Strict guidelines governing privacy, sensitivity, and hate-related content." }
                ].map((std, idx) => (
                  <div key={idx} className="pl-6 border-l-2 border-zinc-100 hover:border-red-700 transition-colors">
                    <h3 className="font-bold text-xl mb-2">{std.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{std.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-950 text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldCheck className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <Gavel className="w-10 h-10 text-red-600 mr-4" />
                  <h2 className="text-3xl font-bold italic">Legal & Ethical Foundations</h2>
                </div>
                <p className="text-gray-400 mb-10 leading-relaxed font-light text-lg">
                  Sparrow Agency maintains full alignment with U.S. law, guided by licensed attorneys. These safeguards protect our collaborators and contributors.
                </p>
                <ul className="space-y-6">
                  {[
                    "Compliance with federal and state regulatory frameworks",
                    "Adherence to privacy and confidentiality laws",
                    "Secure handling of all sensitive or identifying materials",
                    "No acceptance of illegally obtained content",
                    "No requests for unauthorized access or restricted data",
                    "Continuous legal oversight of all workflows and outputs"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-4 text-sm group">
                      <div className="mt-1 w-2 h-2 rounded-full bg-yellow-600 group-hover:scale-150 transition-transform shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-12 border-t border-white/10 italic text-yellow-600 font-bold uppercase tracking-widest text-xs">
                  Measurable Strategic Outcomes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
