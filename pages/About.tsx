
import React from 'react';
import { Globe, Users, Lightbulb, Search, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-10 leading-tight">A National Initiative for <br /><span className="text-yellow-600">Institutional Accountability</span></h1>
            <p className="text-2xl text-gray-600 leading-relaxed font-light mb-12">
              Sparrow Agency is dedicated to strengthening public awareness, institutional accountability, and community protection in the face of escalating hate worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-50 border-l-4 border-zinc-900">
              <Search className="w-10 h-10 mb-6 text-zinc-800" />
              <h3 className="text-xl font-bold mb-4">Verification</h3>
              <p className="text-gray-600">We transform reports through expertise and structure into meaningful intelligence for real-world action.</p>
            </div>
            <div className="p-8 bg-zinc-50 border-l-4 border-zinc-900">
              <Globe className="w-10 h-10 mb-6 text-zinc-800" />
              <h3 className="text-xl font-bold mb-4">National Reach</h3>
              <p className="text-gray-600">A centralized platform bridging technology, research, and social responsibility across borders.</p>
            </div>
            <div className="p-8 bg-zinc-50 border-l-4 border-zinc-900">
              <Users className="w-10 h-10 mb-6 text-zinc-800" />
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600">Operating through a network of skilled professionals who understand the gravity of documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-10 flex items-center italic">
                <BookOpen className="w-10 h-10 mr-4 text-red-600" />
                Our Mission
              </h2>
              <div className="space-y-6 text-xl leading-relaxed text-gray-300">
                <p>
                  To combat antisemitism through strategic public relations, public-facing events, and coalition-driven engagement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                  <div className="bg-white/5 p-4 border border-white/10 uppercase tracking-tighter text-sm font-bold text-center">We challenge it.</div>
                  <div className="bg-white/5 p-4 border border-white/10 uppercase tracking-tighter text-sm font-bold text-center">We expose it.</div>
                  <div className="bg-white/5 p-4 border border-white/10 uppercase tracking-tighter text-sm font-bold text-center">We replace it.</div>
                  <div className="bg-white/5 p-4 border border-white/10 uppercase tracking-tighter text-sm font-bold text-center">We educate.</div>
                </div>
                <p className="pt-6 border-t border-white/10 text-lg">
                  Silence is not neutrality. Public discourse must be actively shaped to protect democratic values and minority rights.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541870676-4724575448bc?auto=format&fit=crop&q=80&w=1200" 
                alt="Institutional Architecture" 
                className="rounded-lg shadow-2xl grayscale brightness-75"
              />
              <div className="absolute -bottom-10 -left-10 bg-yellow-600 p-8 max-w-xs shadow-xl hidden md:block">
                <p className="text-white font-bold text-lg leading-tight">"We envision a transatlantic public space where antisemitism is rejected institutionally."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Lightbulb className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold italic">Our Vision</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto uppercase tracking-widest text-xs">Defending Democracy through Engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Antisemitism is named clearly and rejected institutionally",
              "Jewish identity is represented with accuracy and dignity",
              "Policymakers act from knowledge rather than fear or distortion",
              "Public events serve as platforms for accountability and solidarity",
              "Jewish communities are visible as contributors and leaders",
              "Strategic communication serves as an essential defense of democracy"
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-50 border border-gray-100 group hover:border-yellow-600 transition-colors">
                <div className="text-3xl font-bold text-zinc-300 mb-4 group-hover:text-yellow-600 transition-colors">0{idx + 1}</div>
                <p className="text-zinc-800 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
