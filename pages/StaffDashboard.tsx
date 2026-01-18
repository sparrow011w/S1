
import React, { useState, useEffect } from 'react';
import { db, Submission } from '../lib/db.ts';
import { Database, Shield, Clock, CheckCircle, Archive, ChevronDown, Filter, Search, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StaffDashboard: React.FC = () => {
  const [data, setData] = useState<Submission[]>([]);
  const [filter, setFilter] = useState<Submission['type'] | 'ALL'>('ALL');
  const [selectedItem, setSelectedItem] = useState<Submission | null>(null);

  useEffect(() => {
    setData(db.getAll().reverse());
  }, []);

  const filteredData = filter === 'ALL' ? data : data.filter(item => item.type === filter);

  const handleStatusUpdate = (id: string, status: Submission['status']) => {
    db.updateStatus(id, status);
    setData(db.getAll().reverse());
    if (selectedItem?.id === id) setSelectedItem({ ...selectedItem, status });
  };

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-12 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 text-red-600 mb-2">
              <Database size={20} />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Intelligence Vault v1.0.4</span>
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Operational <span className="text-zinc-600">Dashboard</span></h1>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select 
              className="bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-bold text-zinc-400 focus:outline-none focus:border-red-600 uppercase"
              onChange={(e) => setFilter(e.target.value as any)}
            >
              <option value="ALL">ALL VECTORS</option>
              <option value="PARTNERSHIP">PARTNERSHIPS</option>
              <option value="REPORT">REPORTS</option>
              <option value="CONTACT">INQUIRIES</option>
            </select>
            <button className="bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-bold text-zinc-400 hover:text-white flex items-center gap-2">
              <Download size={14} /> EXPORT SQL
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List Section */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredData.length === 0 ? (
                <div className="border border-dashed border-zinc-800 p-20 text-center">
                  <p className="text-zinc-600 text-xs font-bold tracking-[0.2em] uppercase">No intelligence data detected in this vector.</p>
                </div>
              ) : (
                filteredData.map((item) => (
                  <motion.div 
                    // Fix: Use any cast spread to solve framer-motion TS attribute errors like 'layout'
                    {...({
                      layout: true,
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 }
                    } as any)}
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`p-6 border transition-all cursor-pointer group ${
                      selectedItem?.id === item.id ? 'bg-zinc-900 border-red-600' : 'bg-zinc-950 border-zinc-900 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-red-600 text-[10px] font-black tracking-widest">{item.id}</span>
                        <h3 className="text-sm font-bold uppercase">{item.type} SUBMISSION</h3>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-1 uppercase tracking-tighter ${
                        item.status === 'PENDING' ? 'bg-amber-900/30 text-amber-500' : 
                        item.status === 'VERIFIED' ? 'bg-green-900/30 text-green-500' : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 text-zinc-500 text-[10px] font-bold uppercase">
                      <span className="flex items-center gap-2"><Clock size={12} /> {new Date(item.timestamp).toLocaleString()}</span>
                      <span className="flex items-center gap-2 text-zinc-400 uppercase tracking-tighter">
                        {item.type === 'PARTNERSHIP' ? item.data.fullName : item.type === 'REPORT' ? item.data.location : item.data.name}
                      </span>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          {/* Detail View */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-zinc-950 border border-zinc-900 p-8 min-h-[500px]">
              {selectedItem ? (
                <div className="animate-in fade-in duration-300">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-900">
                    <h2 className="text-sm font-black italic uppercase tracking-tighter">Intelligence Report</h2>
                    <button onClick={() => setSelectedItem(null)} className="text-zinc-600 hover:text-white transition-colors">
                      <Archive size={16} />
                    </button>
                  </div>

                  <div className="space-y-6 overflow-y-auto max-h-[400px] pr-2 scrollbar-thin">
                    {Object.entries(selectedItem.data).map(([key, value]) => (
                      <div key={key}>
                        <label className="block text-[9px] text-zinc-600 font-bold uppercase tracking-widest mb-1">{key}</label>
                        <p className="text-xs text-white leading-relaxed break-words">
                          {typeof value === 'object' && value !== null ? JSON.stringify(value) : String(value)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-zinc-900 grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => handleStatusUpdate(selectedItem.id, 'VERIFIED')}
                      className="bg-green-600 hover:bg-green-700 text-white text-[10px] font-black py-3 uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle size={14} /> VERIFY
                    </button>
                    <button 
                      onClick={() => handleStatusUpdate(selectedItem.id, 'ARCHIVED')}
                      className="bg-zinc-800 hover:bg-zinc-700 text-white text-[10px] font-black py-3 uppercase tracking-widest transition-all"
                    >
                      ARCHIVE
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-zinc-800 text-center">
                  <Shield size={48} className="mb-4 opacity-10" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em]">Select an intelligence vector to view full report detail.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
