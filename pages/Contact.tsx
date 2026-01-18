
import React, { useState } from 'react';
import { Mail, Facebook, Linkedin, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. Our team will reply as soon as possible.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Contact Info */}
          <div>
            <h1 className="text-5xl font-bold mb-8 italic">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
              We’d love to hear from you. Send us a message and our team will reply as soon as possible.
            </p>

            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-zinc-900 p-3 rounded-lg text-white mr-6">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">General Inquiries</h3>
                  <p className="text-gray-500 uppercase tracking-widest text-xs mb-1 font-bold">Primary Channel</p>
                  <a href="mailto:info@sparrowagency.org" className="text-red-700 font-bold hover:underline">info@sparrowagency.org</a>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-100">
                <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-6">Digital Channels</h3>
                <div className="flex space-x-6">
                  <a href="#" className="p-3 bg-zinc-50 rounded-full hover:bg-zinc-100 text-zinc-800 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-zinc-50 rounded-full hover:bg-zinc-100 text-zinc-800 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-zinc-50 rounded-full hover:bg-zinc-100 text-zinc-800 transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
                <p className="mt-4 text-xs text-gray-400 italic italic">TBD Channels will be updated upon activation</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-zinc-50 p-10 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 italic">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-2">Your Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-2">Your Message</label>
                <textarea 
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-zinc-900 text-white py-4 font-bold rounded shadow-lg hover:bg-black transition-all flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
