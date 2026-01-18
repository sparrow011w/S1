
import React from 'react';
import { Shield, Target, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import missing Logo component
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Strategic Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h2 className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Sparrow Public Relations & Event Management</h2>
            <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight mb-8">
              Confronting <span className="text-red-600">Antisemitism</span>. <br />
              Defending <span className="border-b-4 border-yellow-500">Truth</span>. <br />
              Amplifying the Jewish World.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Antisemitism is not a marginal issue. It is a global threat to democratic values, social cohesion, and human dignity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition-all flex items-center group">
                Our Mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="border border-white/30 text-white px-8 py-4 font-bold hover:bg-white/10 transition-all">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Statement Section */}
      <section className="py-24 bg-zinc-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12">
            <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 italic">Meeting the Moment</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Across the United States and Europe, antisemitism has surged in public spaces, digital platforms, academic institutions, and political discourse. Jewish communities are increasingly targeted through violence, vandalism, and the normalization of hate.
            </p>
            <p className="font-semibold text-zinc-900">
              Our work is unapologetically committed to confronting antisemitism while elevating Jewish voices, history, and lived experience in the public arena.
            </p>
            <p>
              Sparrow Agency was created to close the gap between unseen acts of hate and institutional responsibility. We mobilize a skilled workforce to protect targeted communities and strengthen international resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Work Matters Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Why Our Work <span className="text-red-600 underline underline-offset-8 decoration-2">Matters</span></h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-zinc-100 p-3 rounded-lg mr-4">
                    <Target className="w-6 h-6 text-zinc-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Adaptive Response</h3>
                    <p className="text-gray-600">Antisemitism adapts, hiding behind new language and political fractures. Our response must be equally adaptive and informed.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zinc-100 p-3 rounded-lg mr-4">
                    <Award className="w-6 h-6 text-zinc-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Front-Line Tools</h3>
                    <p className="text-gray-600">PR and event management are not auxiliary—they determine which narratives dominate and which values are normalized.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 p-12 text-white rounded-2xl relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Logo className="w-48 h-48" />
              </div>
              <h3 className="text-3xl font-bold mb-6 italic">Our Commitment</h3>
              <ul className="space-y-6 text-lg">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span><strong>Seriousness:</strong> Because the subject demands it.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span><strong>Urgency:</strong> Because delay has consequences.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span><strong>Integrity:</strong> Because trust is essential.</span>
                </li>
              </ul>
              <p className="mt-12 pt-12 border-t border-white/10 font-bold uppercase tracking-widest text-sm text-yellow-500">
                This is not branding. This is impactful public responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="bg-zinc-950 py-16 text-center">
        <h2 className="text-white text-3xl font-bold mb-8">Ready to support the mission?</h2>
        <div className="flex flex-center justify-center space-x-4">
          <Link to="/join-us" className="bg-yellow-600 text-white px-8 py-3 font-bold hover:bg-yellow-700 transition-all rounded-sm">
            Partner With Us
          </Link>
          <Link to="/contact" className="border border-white/20 text-white px-8 py-3 font-bold hover:bg-white/10 transition-all rounded-sm">
            Contact Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
