import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Get In{' '}
            <span 
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Touch
            </span>
          </h2>
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
          <p 
            className={`text-xl text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div 
            className={`md:col-span-2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="mr-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wide">Email</h4>
                  <a href="mailto:shuklaarpit@gmail.com" className="text-white hover:text-purple-400 transition-colors duration-300">
                    shuklaarpit@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="mr-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wide">Location</h4>
                  <p className="text-white">Jhansi, UP, India</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="mr-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wide">Phone</h4>
                  <a href="tel:+916393818467" className="text-white hover:text-purple-400 transition-colors duration-300">
                    +91 6393818467
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com/arpitshukla267', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/arpit-shukla-9a8b54358/', label: 'LinkedIn' },
                  // { icon: Twitter, href: '#', label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a 
                    key={label}
                    href={href} 
                    className="w-12 h-12 bg-black border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className={`md:col-span-3 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-600/50 text-green-400 rounded-lg">
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Name</label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">Subject</label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 animate-border-glow"></div>
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className="relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;