
import React, { useState, useEffect } from 'react';
import { db, Submission } from '../lib/db.ts';
import { Database, Shield, Clock, CheckCircle, Archive, ChevronDown, Filter, Search, Download, Trash2, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StaffDashboard: React.FC = () => {
  const [data, setData] = useState<Submission[]>([]);
  const [filter, setFilter] = useState<Submission['type'] | 'ALL'>('ALL');
  const [selectedItem, setSelectedItem] = useState<Submission | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const refreshData = () => {
    const all = db.getAll();
    setData([...all].reverse());
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleClear = () => {
    if (confirm("DANGER: This will permanently wipe the operational vault. Continue?")) {
      db.clear();
      refreshData();
      setSelectedItem(null);
    }
  };

  const filteredData = data.filter(item => {
    const matchesFilter = filter === 'ALL' || item.type === filter;
    const itemString = JSON.stringify(item.data).toLowerCase();
    const matchesSearch = itemString.includes(searchTerm.toLowerCase()) || item.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleStatusUpdate = (id: string, status: Submission['status']) => {
    db.updateStatus(id, status);
    refreshData();
    if (selectedItem?.id === id) setSelectedItem({ ...selectedItem, status });
  };

  const renderDataValue = (val: any) => {
    if (Array.isArray(val)) return val.join(', ');
    if (typeof val === 'boolean') return val ? 'TRUE' : 'FALSE';
    if (val === null || val === undefined) return 'N/A';
    return String(val);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-12 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 text-red-600 mb-2">
              <Database size={20} />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Intelligence Vault v1.1.0</span>
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Operational <span className="text-zinc-600">Dashboard</span></h1>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 w-4 h-4" />
              <input 
                type="text" 
                placeholder="SEARCH VAULT..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-zinc-900 border border-zinc-800 pl-10 pr-4 py-2 text-xs font-bold text-white focus:outline-none focus:border-red-600 uppercase"
              />
            </div>
            <select 
              className="bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-bold text-zinc-400 focus:outline-none focus:border-red-600 uppercase cursor-pointer"
              onChange={(e) => setFilter(e.target.value as any)}
            >
              <option value="ALL">ALL VECTORS</option>
              <option value="PARTNERSHIP">PARTNERSHIPS</option>
              <option value="REPORT">REPORTS</option>
              <option value="CONTACT">INQUIRIES</option>
            </select>
            <button 
              onClick={handleClear}
              className="bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-600 hover:text-white flex items-center gap-2 transition-all"
            >
              <Trash2 size={14} /> RESET
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List Section */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredData.length === 0 ? (
                <div className="border border-dashed border-zinc-800 p-20 text-center flex flex-col items-center justify-center gap-4">
                  <Database className="w-12 h-12 text-zinc-900" />
                  <p className="text-zinc-600 text-xs font-bold tracking-[0.2em] uppercase max-w-xs mx-auto leading-relaxed">
                    No records found in current vector. Ensure public forms are receiving data.
                  </p>
                  <button onClick={refreshData} className="text-zinc-400 hover:text-white flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mt-4">
                    <RefreshCcw size={12} /> Force Rescan
                  </button>
                </div>
              ) : (
                filteredData.map((item) => (
                  <motion.div 
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
                        <span className="text-red-600 text-[10px] font-black tracking-widest leading-none">{item.id}</span>
                        <h3 className="text-sm font-bold uppercase">{item.type} SUBMISSION</h3>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-1 uppercase tracking-tighter ${
                        item.status === 'PENDING' ? 'bg-amber-900/30 text-amber-500 border border-amber-900/50' : 
                        item.status === 'VERIFIED' ? 'bg-green-900/30 text-green-500 border border-green-900/50' : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 text-zinc-500 text-[10px] font-bold uppercase">
                      <span className="flex items-center gap-2"><Clock size={12} /> {new Date(item.timestamp).toLocaleDateString()} {new Date(item.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      <span className="flex items-center gap-2 text-zinc-400 uppercase tracking-tighter truncate max-w-[200px]">
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
            <div className="sticky top-28 bg-zinc-950 border border-zinc-900 p-8 min-h-[500px] flex flex-col shadow-2xl">
              {selectedItem ? (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-900">
                    <div className="flex flex-col">
                      <h2 className="text-sm font-black italic uppercase tracking-tighter">Intelligence Report</h2>
                      <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-widest">{selectedItem.id}</span>
                    </div>
                    <button onClick={() => setSelectedItem(null)} className="text-zinc-600 hover:text-white transition-colors">
                      <Archive size={16} />
                    </button>
                  </div>

                  <div className="space-y-6 overflow-y-auto max-h-[50vh] pr-4 scrollbar-thin scrollbar-thumb-zinc-800 custom-scroll">
                    {Object.entries(selectedItem.data).map(([key, value]) => (
                      <div key={key} className="group/field">
                        <label className="block text-[9px] text-zinc-600 font-bold uppercase tracking-widest mb-1 group-hover/field:text-red-600 transition-colors">{key.replace(/([A-Z])/g, ' $1')}</label>
                        <p className="text-xs text-white leading-relaxed break-words bg-zinc-900/30 p-2 border-l border-zinc-800">
                          {renderDataValue(value)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-zinc-900">
                    <p className="text-[9px] text-zinc-500 uppercase font-bold mb-4 tracking-widest">Update Operational Status</p>
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => handleStatusUpdate(selectedItem.id, 'VERIFIED')}
                        className={`text-[10px] font-black py-3 uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                          selectedItem.status === 'VERIFIED' 
                            ? 'bg-green-600 text-white' 
                            : 'bg-zinc-900 text-green-500 hover:bg-green-600 hover:text-white border border-green-900'
                        }`}
                      >
                        <CheckCircle size={14} /> {selectedItem.status === 'VERIFIED' ? 'VERIFIED' : 'VERIFY'}
                      </button>
                      <button 
                        onClick={() => handleStatusUpdate(selectedItem.id, 'ARCHIVED')}
                        className={`text-[10px] font-black py-3 uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                          selectedItem.status === 'ARCHIVED' 
                            ? 'bg-zinc-800 text-zinc-500' 
                            : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-700'
                        }`}
                      >
                        <Archive size={14} /> ARCHIVE
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-zinc-800 text-center py-20">
                  <Shield size={48} className="mb-4 opacity-10" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] max-w-[200px]">Select an intelligence vector to decrypt report contents.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #27272a; border-radius: 2px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
      `}</style>
    </div>
  );
};

export default StaffDashboard;
