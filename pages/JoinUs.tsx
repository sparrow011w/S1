
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle, AlertCircle, FileText, ChevronRight, Briefcase, ShieldCheck, Gavel, X } from 'lucide-react';
import { db } from '../lib/db.ts';

const JoinUs: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    website: '',
    location: '',
    services: [] as string[],
    otherService: '',
    skillsSummary: '',
    expertise: '',
    tools: '',
    yearsExperience: '',
    cvFile: null as File | null,
    portfolioUrl: '',
    workExamplesFile: null as File | null,
    availability: '',
    preferredSchedule: '',
    isRemote: false,
    projectDuration: '',
    rates: '',
    openToNegotiation: false,
    whyJoin: '',
    complianceLaw: false,
    complianceMaterials: false,
    complianceSecurity: false,
    signature: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Service Options
  const serviceOptions = [
    'Media & Communications', 'Writing / Copywriting', 'Design / Creative',
    'Video & Production', 'IT / Technical', 'AI & Data',
    'Research & Documentation', 'Strategy & Communications',
    'Social Media', 'Community Engagement'
  ];

  // Validation Logic
  useEffect(() => {
    const checkValidity = () => {
      let valid = true;
      if (!formData.fullName.trim()) valid = false;
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) valid = false;
      if (!formData.location.trim()) valid = false;
      if (!formData.skillsSummary.trim()) valid = false;
      if (!formData.complianceLaw || !formData.complianceMaterials || !formData.complianceSecurity) valid = false;
      if (!formData.signature.trim()) valid = false;
      if (!formData.date.trim()) valid = false;
      setIsValid(valid);
    };
    checkValidity();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked, files } = target;
    
    if (type === 'checkbox') {
      if (name === 'services') {
        const updatedServices = checked 
          ? [...formData.services, value]
          : formData.services.filter(service => service !== value);
        setFormData(prev => ({ ...prev, services: updatedServices }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else if (type === 'file') {
      const file = files?.[0];
      if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
        alert("File too large. Please upload a file smaller than 5MB.");
        target.value = ''; 
        setFormData(prev => ({ ...prev, [name]: null }));
      } else {
        setFormData(prev => ({ ...prev, [name]: file || null }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.skillsSummary.trim()) newErrors.skillsSummary = 'Summary is required';
    if (!formData.complianceLaw || !formData.complianceMaterials || !formData.complianceSecurity) {
      newErrors.compliance = 'All compliance checks are required';
    }
    if (!formData.signature.trim()) newErrors.signature = 'Signature is required';
    if (!formData.date.trim()) newErrors.date = 'Date is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // PERSIST TO DATABASE
    db.save('PARTNERSHIP', {
      ...formData,
      cvFile: formData.cvFile?.name || 'No file',
      workExamplesFile: formData.workExamplesFile?.name || 'No file'
    });

    setTimeout(() => {
      setShowToast(true);
      setFormData({
        fullName: '', companyName: '', email: '', phone: '', website: '', location: '',
        services: [], otherService: '', skillsSummary: '', expertise: '', tools: '',
        yearsExperience: '', cvFile: null, portfolioUrl: '', workExamplesFile: null,
        availability: '', preferredSchedule: '', isRemote: false, projectDuration: '',
        rates: '', openToNegotiation: false, whyJoin: '',
        complianceLaw: false, complianceMaterials: false, complianceSecurity: false,
        signature: '', date: new Date().toISOString().split('T')[0]
      });
      setErrors({});
      setIsSubmitting(false);
      window.scrollTo(0, 0);
      setTimeout(() => setShowToast(false), 8000);
    }, 1500);
  };

  // Define fadeInUp with any to bypass strict framer-motion type checks
  const fadeInUp: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const inputClasses = "w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all duration-300 text-white placeholder-zinc-600 font-mono text-sm";
  const labelClasses = "block text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-[0.2em]";
  const sectionClasses = "bg-zinc-950 p-8 border border-zinc-900 mb-8";
  const sectionTitleClasses = "text-xl font-black text-white mb-8 pb-4 border-b border-zinc-900 flex items-center gap-4 italic uppercase tracking-tighter";

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            // Fix: Use any cast spread to solve framer-motion TS attribute errors
            {...({
              initial: { opacity: 0, y: -50 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -50 }
            } as any)}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-red-600 text-white px-6 py-4 shadow-2xl flex items-center gap-4 border border-red-500 max-w-lg w-full"
          >
            <CheckCircle className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-bold text-sm uppercase tracking-widest leading-none mb-1">Application Transmitted</p>
              <p className="text-[10px] opacity-90 uppercase tracking-tighter">
                Sent to <span className="font-bold">info@sparrow-agency.com</span> and registered in secure database.
              </p>
            </div>
            <button onClick={() => setShowToast(false)} className="ml-auto hover:opacity-70">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            // Fix: Use any cast spread to solve framer-motion TS attribute errors
            {...({
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 }
            } as any)}
            className="inline-block px-4 py-1 border border-red-900/50 mb-8"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-red-600 uppercase">
              Operational Partnerships
            </span>
          </motion.div>
          <motion.h1 
            // Fix: Use any cast spread to solve framer-motion TS attribute errors
            {...({
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 }
            } as any)}
            className="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter leading-none"
          >
            SERVICE PROVIDER <span className="text-red-600">APPLICATION</span>
          </motion.h1>
          <motion.p 
            // Fix: Use any cast spread to solve framer-motion TS attribute errors
            {...({
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1 }
            } as any)}
            className="text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Join our network of elite professionals dedicated to defending truth and amplifying the Jewish world. We are seeking partners in media, technology, and strategy.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          
          {/* Section 1: Identity */}
          <motion.div {...fadeInUp} className={sectionClasses}>
            <h2 className={sectionTitleClasses}>
              <span className="text-red-600">01</span> Identity & Reach
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Full Name *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={`${inputClasses} ${errors.fullName ? 'border-red-600' : ''}`} placeholder="OPERATOR NAME" />
                {errors.fullName && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.fullName}</p>}
              </div>
              <div>
                <label className={labelClasses}>Entity / Company Name</label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={inputClasses} placeholder="OPTIONAL" />
              </div>
              <div>
                <label className={labelClasses}>Secure Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`${inputClasses} ${errors.email ? 'border-red-600' : ''}`} placeholder="COMMUNICATIONS LINK" />
                {errors.email && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.email}</p>}
              </div>
              <div>
                <label className={labelClasses}>Phone / Signal</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+X (XXX) XXX-XXXX" />
              </div>
              <div>
                <label className={labelClasses}>Portfolio / Intel Source</label>
                <input type="url" name="website" value={formData.website} onChange={handleChange} className={inputClasses} placeholder="HTTPS://" />
              </div>
              <div>
                <label className={labelClasses}>Operational Hub *</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} className={`${inputClasses} ${errors.location ? 'border-red-600' : ''}`} placeholder="CITY, COUNTRY (TIMEZONE)" />
                {errors.location && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.location}</p>}
              </div>
            </div>
          </motion.div>

          {/* Section 2: Domains of Expertise */}
          <motion.div {...fadeInUp} className={sectionClasses}>
            <h2 className={sectionTitleClasses}>
              <span className="text-red-600">02</span> Domains of Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceOptions.map((service) => (
                <label key={service} className="flex items-center space-x-3 cursor-pointer group bg-zinc-900/50 p-4 border border-zinc-900 hover:border-zinc-700 transition-all">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="peer h-5 w-5 border border-zinc-800 bg-black checked:bg-red-600 checked:border-red-600 transition-all appearance-none cursor-pointer"
                    />
                    <CheckCircle className="absolute hidden peer-checked:block text-white pointer-events-none" size={12} style={{ top: '4px', left: '4px' }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{service}</span>
                </label>
              ))}
              <div className="col-span-full mt-4">
                <label className="flex items-center space-x-3 cursor-pointer mb-3">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      name="otherServiceCheck"
                      checked={!!formData.otherService}
                      onChange={(e) => setFormData(prev => ({ ...prev, otherService: e.target.checked ? ' ' : '' }))}
                      className="peer h-5 w-5 border border-zinc-800 bg-black checked:bg-red-600 checked:border-red-600 transition-all appearance-none cursor-pointer"
                    />
                    <CheckCircle className="absolute hidden peer-checked:block text-white pointer-events-none" size={12} style={{ top: '4px', left: '4px' }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Other Specialty</span>
                </label>
                {formData.otherService !== '' && (
                  <input
                    type="text"
                    name="otherService"
                    value={formData.otherService === ' ' ? '' : formData.otherService}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="SPECIFY DOMAIN..."
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Section 3: Professional Vector */}
          <motion.div {...fadeInUp} className={sectionClasses}>
            <h2 className={sectionTitleClasses}>
              <span className="text-red-600">03</span> Professional Vector
            </h2>
            <div className="space-y-6">
              <div>
                <label className={labelClasses}>Operational Strength Summary *</label>
                <textarea name="skillsSummary" value={formData.skillsSummary} onChange={handleChange} rows={4} className={`${inputClasses} resize-none ${errors.skillsSummary ? 'border-red-600' : ''}`} placeholder="CORE COMPETENCIES SUMMARY..."></textarea>
                {errors.skillsSummary && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.skillsSummary}</p>}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Tooling & Technology</label>
                  <textarea name="tools" value={formData.tools} onChange={handleChange} rows={3} className={`${inputClasses} resize-none`} placeholder="ADOBE, OSINT TOOLS, ASANA, ETC."></textarea>
                </div>
                <div>
                  <label className={labelClasses}>Deployment Experience</label>
                  <input type="text" name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} className={inputClasses} placeholder="E.G. 5+ YEARS" />
                  
                  <div className="mt-6">
                    <label className={labelClasses}>CURRICULUM VITAE</label>
                    <div className="relative">
                      <input type="file" name="cvFile" onChange={handleChange} className="hidden" id="cv-upload" accept=".pdf,.doc,.docx" />
                      <label htmlFor="cv-upload" className="flex items-center justify-between w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 cursor-pointer transition-colors text-xs font-bold uppercase tracking-widest">
                        <span className="text-zinc-500 truncate">{formData.cvFile ? formData.cvFile.name : 'UPLOAD CV'}</span>
                        <Upload size={16} className="text-red-600" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Evidence of Impact */}
          <motion.div {...fadeInUp} className={sectionClasses}>
            <h2 className={sectionTitleClasses}>
              <span className="text-red-600">04</span> Evidence of Impact
            </h2>
            <div className="space-y-6">
              <div>
                <label className={labelClasses}>Portfolio Link / Case Studies</label>
                <input type="url" name="portfolioUrl" value={formData.portfolioUrl} onChange={handleChange} className={inputClasses} placeholder="HTTPS://" />
              </div>
              <div>
                <label className={labelClasses}>Work Samples Upload</label>
                <div className="relative">
                  <input type="file" name="workExamplesFile" onChange={handleChange} className="hidden" id="examples-upload" accept=".pdf,.jpg,.png,.zip" />
                  <label htmlFor="examples-upload" className="flex items-center justify-between w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 cursor-pointer transition-colors text-xs font-bold uppercase tracking-widest">
                    <span className="text-zinc-500 truncate">{formData.workExamplesFile ? formData.workExamplesFile.name : 'UPLOAD SAMPLES'}</span>
                    <Upload size={16} className="text-red-600" />
                  </label>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Deployment Capability */}
          <motion.div {...fadeInUp} className={sectionClasses}>
            <h2 className={sectionTitleClasses}>
              <span className="text-red-600">05</span> Deployment Capability
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Weekly Capacity</label>
                  <input type="text" name="availability" value={formData.availability} onChange={handleChange} className={inputClasses} placeholder="E.G. 20 HRS/WEEK" />
                </div>
                <div>
                  <label className={labelClasses}>Preferred Schedule</label>
                  <input type="text" name="preferredSchedule" value={formData.preferredSchedule} onChange={handleChange} className={inputClasses} placeholder="E.G. EST MORNINGS" />
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-zinc-900/30 p-4 border border-zinc-900">
                <input
                  type="checkbox"
                  name="isRemote"
                  id="isRemote"
                  checked={formData.isRemote}
                  onChange={handleChange}
                  className="h-5 w-5 border border-zinc-800 bg-black checked:bg-red-600 checked:border-red-600 appearance-none cursor-pointer"
                />
                <label htmlFor="isRemote" className="text-xs font-bold uppercase tracking-widest text-zinc-400 cursor-pointer">Capable of Remote Operations</label>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Compensation Matrix */}
          <motion.div {...fadeInUp} className={sectionClasses}>
            <h2 className={sectionTitleClasses}>
              <span className="text-red-600">06</span> Compensation Matrix
            </h2>
            <div className="space-y-6">
              <div>
                <label className={labelClasses}>Standard Rates (Hourly/Project)</label>
                <input type="text" name="rates" value={formData.rates} onChange={handleChange} className={inputClasses} placeholder="E.G. $X / HOUR" />
              </div>
              <div className="flex items-center space-x-3 bg-zinc-900/30 p-4 border border-zinc-900">
                <input
                  type="checkbox"
                  name="openToNegotiation"
                  id="openToNegotiation"
                  checked={formData.openToNegotiation}
                  onChange={handleChange}
                  className="h-5 w-5 border border-zinc-800 bg-black checked:bg-red-600 checked:border-red-600 appearance-none cursor-pointer"
                />
                <label htmlFor="openToNegotiation" className="text-xs font-bold uppercase tracking-widest text-zinc-400 cursor-pointer">Open to Strategic Negotiation</label>
              </div>
            </div>
          </motion.div>

          {/* Section 7: Motivation */}
          <motion.div {...fadeInUp} className={sectionClasses}>
            <h2 className={sectionTitleClasses}>
              <span className="text-red-600">07</span> Strategic Interest
            </h2>
            <div>
              <label className={labelClasses}>Why Join Sparrow Agency?</label>
              <textarea name="whyJoin" value={formData.whyJoin} onChange={handleChange} rows={4} className={`${inputClasses} resize-none`} placeholder="BRIEFLY DESCRIBE YOUR MOTIVATION..."></textarea>
            </div>
          </motion.div>

          {/* Section 8: Integrity & Compliance */}
          <motion.div {...fadeInUp} className={sectionClasses}>
            <h2 className={sectionTitleClasses}>
              <span className="text-red-600">08</span> Integrity & Compliance
            </h2>
            <div className="bg-zinc-900/50 p-6 border border-zinc-800 space-y-4">
              <label className="flex items-start space-x-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="complianceLaw"
                  checked={formData.complianceLaw}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 border border-zinc-800 bg-black checked:bg-red-600 checked:border-red-600 appearance-none shrink-0"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors leading-relaxed">Compliance with all U.S. and regional laws is mandatory.</span>
              </label>
              <label className="flex items-start space-x-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="complianceMaterials"
                  checked={formData.complianceMaterials}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 border border-zinc-800 bg-black checked:bg-red-600 checked:border-red-600 appearance-none shrink-0"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors leading-relaxed">I will not provide or share unauthorized/unlawful materials.</span>
              </label>
              <label className="flex items-start space-x-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="complianceSecurity"
                  checked={formData.complianceSecurity}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 border border-zinc-800 bg-black checked:bg-red-600 checked:border-red-600 appearance-none shrink-0"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors leading-relaxed">Adherence to strict digital security guidelines is required.</span>
              </label>
            </div>
            {errors.compliance && <p className="text-red-500 text-[10px] mt-4 font-bold uppercase tracking-widest flex items-center gap-2"><AlertCircle size={14} /> {errors.compliance}</p>}
          </motion.div>

          {/* Section 9: Authentication */}
          <motion.div {...fadeInUp} className={sectionClasses}>
            <h2 className={sectionTitleClasses}>
              <span className="text-red-600">09</span> Authentication
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className={labelClasses}>Digital Signature *</label>
                <input type="text" name="signature" value={formData.signature} onChange={handleChange} className={`${inputClasses} ${errors.signature ? 'border-red-600' : ''}`} placeholder="FULL LEGAL NAME" />
                {errors.signature && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.signature}</p>}
              </div>
              <div>
                <label className={labelClasses}>Authentication Date *</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className={`${inputClasses} ${errors.date ? 'border-red-600' : ''}`} />
                {errors.date && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.date}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-black py-6 text-sm uppercase italic tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-4 group"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                  TRANSMITTING DATA...
                </>
              ) : (
                <>
                  <FileText size={18} />
                  ESTABLISH PARTNERSHIP
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <p className="text-center text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mt-6 leading-relaxed">
              BY SUBMITTING, YOU AFFIRM THE INTEGRITY OF ALL PROVIDED DATA.<br /> DATA IS ENCRYPTED AND STORED IN SECURE ENVIRONMENTS AT INFO@SPARROW-AGENCY.COM.
            </p>
          </motion.div>

        </form>
      </section>

      {/* Info Sections Footer */}
      <section className="max-w-4xl mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border border-zinc-900 bg-zinc-950/50">
          <Briefcase className="text-red-600 w-8 h-8 mb-6" />
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white mb-4">Our Standards</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-bold uppercase tracking-widest">Accuracy, Security, Neutrality, and Ethical Responsibility are the four pillars of the Sparrow Agency network.</p>
        </div>
        <div className="p-8 border border-zinc-900 bg-zinc-950/50">
          <ShieldCheck className="text-red-600 w-8 h-8 mb-6" />
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white mb-4">Legal Foundation</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-bold uppercase tracking-widest">Full alignment with U.S. law and data privacy frameworks ensures safe collaboration for all parties.</p>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
