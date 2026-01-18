
import React from 'react';
import { ArrowRight, Shield, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-black">
      {/* Hero Section - Matching visual reference */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl text-center">
          <div className="inline-block px-4 py-2 border border-red-900/50 mb-12">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-red-600 uppercase">
              OPERATIONAL INTELLIGENCE & PR
            </span>
          </div>
          
          <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-black leading-[0.9] text-white tracking-tighter mb-10 uppercase italic">
            CONFRONTING <span className="text-red-600">HATE.</span><br />
            DEFENDING TRUTH.
          </h1>
          
          <p className="max-w-2xl mx-auto text-sm md:text-base text-zinc-400 leading-relaxed font-medium mb-12 px-4">
            Sparrow Agency combines investigative rigor with strategic public relations to combat antisemitism and elevate the Jewish world. We operate in the shadows to bring truth to light.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <Link 
              to="/report" 
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-5 font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center group italic"
            >
              REPORT AN INCIDENT
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto border border-white hover:bg-white hover:text-black text-white px-10 py-5 font-black uppercase tracking-widest text-xs transition-all italic text-center"
            >
              OUR SERVICES
            </Link>
          </div>
        </div>
        
        {/* Bottom decorative divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-zinc-800 to-transparent"></div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12">
            <Shield className="w-12 h-12 text-red-600 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-8">Meeting the Moment</h2>
          </div>
          <div className="space-y-8 text-lg text-zinc-400 leading-relaxed font-medium">
            <p>
              Antisemitism is not a marginal issue. It is a global threat to democratic values, social cohesion, and human dignity.
            </p>
            <p className="text-white">
              Across the United States and Europe, antisemitism has surged. Jewish communities are increasingly targeted through delegitimization, distortion of history, and the normalization of hate.
            </p>
            <p>
              Sparrow Agency was created to close the gap between unseen acts of hate and institutional responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Block */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Target className="w-8 h-8 text-red-600" />, 
                title: "SERIOUSNESS", 
                desc: "We work with seriousness because the subject demands it." 
              },
              { 
                icon: <Award className="w-8 h-8 text-red-600" />, 
                title: "URGENCY", 
                desc: "We act with urgency because delay has consequences." 
              },
              { 
                icon: <Shield className="w-8 h-8 text-red-600" />, 
                title: "INTEGRITY", 
                desc: "We partner with integrity because trust is essential." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 p-10 border border-zinc-800 hover:border-red-600 transition-colors group">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-white uppercase italic mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
