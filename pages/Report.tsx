import React, { useState } from 'react';
import { ShieldCheck, Lock, Eye, AlertCircle, FileText, Send } from 'lucide-react';

const Report: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submission conceptually sent to info@sparrow-agency.com
    console.log("Submitting report to info@sparrow-agency.com");
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-zinc-50 px-4 pt-20">
        <div className="max-w-md w-full bg-white p-12 text-center shadow-xl border-t-4 border-red-600 rounded-lg">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 italic uppercase tracking-tighter">Report Received</h2>
          <p className="text-gray-600 mb-8">
            Your report has been securely transmitted to <span className="font-bold text-black">info@sparrow-agency.com</span>. Our specialists will begin the verification process immediately. 
            All data is handled with the highest level of confidentiality under legal oversight.
          </p>
          <button 
            onClick={() => window.location.hash = '#/'}
            className="bg-zinc-900 text-white px-8 py-3 font-bold rounded hover:bg-black transition-all uppercase tracking-widest text-xs italic"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Header */}
      <section className="bg-red-700 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-12">
            <h1 className="text-5xl font-bold mb-6 italic uppercase tracking-tighter">Secure Incident Reporting</h1>
            <p className="text-xl opacity-90 leading-relaxed font-light">
              Sparrow Agency functions as a trusted, centralized platform where individuals can safely report incidents of antisemitism and hate for structured response.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Safety Features */}
      <section className="py-12 border-b border-gray-100 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Lock className="w-6 h-6 text-zinc-400" />
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Secure & Encrypted</span>
            </div>
            <div className="flex items-center space-x-4">
              <Eye className="w-6 h-6 text-zinc-400" />
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Confidential Processing</span>
            </div>
            <div className="flex items-center space-x-4">
              <FileText className="w-6 h-6 text-zinc-400" />
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Expert Verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-10 text-red-600">
                <AlertCircle className="w-8 h-8 mr-4" />
                <h2 className="text-2xl font-bold italic uppercase tracking-tighter">Incident Details</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-widest text-[10px]">Date of Incident</label>
                    <input type="date" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-widest text-[10px]">Location / Platform</label>
                    <input type="text" placeholder="e.g. University Campus, Digital Platforms" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-widest text-[10px]">Type of Incident</label>
                  <select className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none appearance-none" required>
                    <option value="">Select category...</option>
                    <option value="vandalism">Violence / Vandalism</option>
                    <option value="harassment">Verbal Harassment</option>
                    <option value="digital">Digital / Online Hate</option>
                    <option value="institutional">Institutional Discrimination</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-widest text-[10px]">Description of Events</label>
                  <textarea 
                    rows={8} 
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none" 
                    placeholder="Provide as much detail as possible, including individuals involved, specific language used, and any witnesses."
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-widest text-[10px]">Supporting Evidence (Links/Files)</label>
                  <p className="text-[10px] text-gray-500 mb-3 italic">Screenshots, documents, or links to public posts are critical for verification.</p>
                  <input type="text" placeholder="Paste evidence links here..." className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none mb-3" />
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <FileText className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500">
                          <span>Upload a file</span>
                          <input type="file" className="sr-only" />
                        </label>
                        <p className="pl-1 text-xs">or drag and drop</p>
                      </div>
                      <p className="text-[10px] text-gray-500 uppercase">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <div className="flex items-start mb-8">
                    <input type="checkbox" className="mt-1 mr-3 h-4 w-4 text-red-600 border-gray-300 rounded" required />
                    <p className="text-xs text-gray-600 leading-relaxed">
                      I understand that Sparrow Agency will verify this information and may transform it into intelligence for real-world action. I confirm that the information provided is accurate and routed to <span className="font-bold">info@sparrow-agency.com</span> for processing.
                    </p>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full md:w-auto bg-red-700 text-white px-12 py-4 font-bold rounded shadow-xl hover:bg-red-800 transition-all flex items-center justify-center uppercase tracking-widest italic"
                  >
                    Submit Secure Report
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Note */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 italic uppercase tracking-tighter">Reporting Methodology</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Every report becomes part of a broader landscape of understanding that empowers communities and informs institutions. 
            Our model integrates technology, communication, and research to support accountability and resilience against hate.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Report;