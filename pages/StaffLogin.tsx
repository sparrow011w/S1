
import React, { useState } from 'react';
import { Lock, ShieldCheck, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StaffLogin: React.FC = () => {
  const [operatorId, setOperatorId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    if (operatorId === 'ADMIN' && password === 'SPARROW-SECURE') {
      navigate('/staff-dashboard');
    } else {
      setError('INVALID OPERATOR IDENTITY OR ACCESS VECTOR');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-zinc-950 border border-zinc-900 p-10 rounded shadow-2xl animate-in slide-in-from-bottom-8 duration-700">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-red-900/10 rounded-full mb-6">
            <ShieldCheck className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-2xl font-black italic uppercase tracking-tighter mb-2">Operational Access</h1>
          <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase">Sparrow Internal Systems</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="bg-red-900/20 border border-red-900 p-4 flex items-center gap-3 text-red-600 text-[10px] font-bold uppercase">
              <AlertCircle size={14} /> {error}
            </div>
          )}
          <div>
            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Terminal Identity</label>
            <input 
              type="text" 
              required
              value={operatorId}
              onChange={(e) => setOperatorId(e.target.value.toUpperCase())}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded text-sm focus:outline-none focus:border-red-600 transition-colors font-mono"
              placeholder="0X-OPERATOR-ID"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Access Vector</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded text-sm focus:outline-none focus:border-red-600 transition-colors font-mono"
              placeholder="••••••••••••"
            />
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase italic tracking-widest text-xs transition-all flex items-center justify-center group">
            <Lock className="w-4 h-4 mr-2" />
            Establish Session
          </button>
        </form>

        <div className="mt-6 text-center">
            <p className="text-[9px] text-zinc-700 uppercase font-bold tracking-tighter">Hint: ADMIN / SPARROW-SECURE</p>
        </div>

        <div className="mt-10 pt-10 border-t border-zinc-900 text-center">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest leading-relaxed">
            Unauthorized access is strictly prohibited.<br /> All session data is monitored and recorded.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
