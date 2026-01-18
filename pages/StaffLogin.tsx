
import React, { useState } from 'react';
import { Lock, ShieldCheck, AlertCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StaffLogin: React.FC = () => {
  const [operatorId, setOperatorId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication with normalized inputs
    const normalizedId = operatorId.trim().toUpperCase();
    const normalizedPass = password.trim();

    setTimeout(() => {
      if (normalizedId === 'ADMIN' && normalizedPass === 'SPARROW-SECURE') {
        navigate('/staff-dashboard');
      } else {
        setError('CRITICAL: AUTHENTICATION VECTOR FAILED. INVALID IDENTITY OR ACCESS KEY.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-900/40 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-md w-full bg-zinc-950 border border-zinc-900 p-10 rounded shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-red-900/10 border border-red-900/20 rounded-full mb-6 group">
            <ShieldCheck className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <h1 className="text-2xl font-black italic uppercase tracking-tighter mb-2">Operational Access</h1>
          <p className="text-zinc-500 text-xs font-bold tracking-[0.3em] uppercase">Sparrow Agency Internal Systems</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="bg-red-900/10 border border-red-900/30 p-4 flex items-start gap-3 text-red-600 text-[10px] font-bold uppercase leading-relaxed animate-in fade-in zoom-in-95">
              <AlertCircle size={14} className="shrink-0 mt-0.5" /> 
              <span>{error}</span>
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2">Terminal Identity</label>
              <input 
                type="text" 
                required
                disabled={isLoading}
                value={operatorId}
                onChange={(e) => setOperatorId(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-none text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-mono text-white placeholder-zinc-700"
                placeholder="OPERATOR-ID"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2">Access Key</label>
              <input 
                type="password" 
                required
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-none text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-mono text-white placeholder-zinc-700"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-red-700 hover:bg-red-600 disabled:bg-zinc-800 disabled:text-zinc-600 text-white py-4 font-black uppercase italic tracking-[0.2em] text-xs transition-all flex items-center justify-center group relative overflow-hidden"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ESTABLISHING LINK...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Lock className="w-3 h-3 mb-0.5" />
                Establish Session
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
            <p className="text-[9px] text-zinc-700 uppercase font-bold tracking-widest border border-zinc-900/50 py-2 rounded">
              HINT: <span className="text-zinc-500 px-1">ADMIN</span> / <span className="text-zinc-500 px-1">SPARROW-SECURE</span>
            </p>
        </div>

        <div className="mt-10 pt-8 border-t border-zinc-900 text-center">
          <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.15em] leading-relaxed">
            Unauthorized access attempt is a violation of protocol.<br /> 
            Active monitoring is enabled for this terminal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
