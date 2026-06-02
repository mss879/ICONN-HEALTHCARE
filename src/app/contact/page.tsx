"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import gsap from "gsap";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", org: "", msg: "" });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Staggered entrance animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      
      tl.fromTo(".contact-header", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 });
      
      if (infoRef.current) {
        tl.fromTo(infoRef.current.children,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, stagger: 0.15 },
          "-=0.6"
        );
      }

      if (formRef.current) {
        tl.fromTo(formRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0 },
          "-=0.8"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    // Simulate submission
    setFormSubmitted(true);
    setFormData({ name: "", email: "", org: "", msg: "" });
  };

  return (
    <div ref={containerRef} className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 bg-white">
      
      {/* Page Header */}
      <div className="contact-header text-center max-w-3xl mx-auto space-y-4 opacity-0">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">Get in Touch</span>
        <h1 className="text-4xl sm:text-5xl font-black text-secondary tracking-tight leading-none">
          Contact Iconn Healthcare
        </h1>
        <p className="text-secondary-light font-normal leading-relaxed">
          Have queries about our diagnostic products, laboratory reagents, or distribution partnerships in Sri Lanka? Reach out to our specialized support team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Info Column */}
        <div ref={infoRef} className="lg:col-span-5 space-y-6">
          
          {/* Card 1: Address */}
          <div className="glass bg-white p-6 rounded-3xl border border-card-border flex items-start space-x-4 opacity-0 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500/10 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-secondary">Our Address</h3>
              <p className="mt-1.5 text-sm text-secondary-light leading-relaxed font-normal">
                # 635, Maradana Road,<br />
                Colombo 10, Sri Lanka.
              </p>
            </div>
          </div>

          {/* Card 2: Call Details */}
          <div className="glass bg-white p-6 rounded-3xl border border-card-border flex items-start space-x-4 opacity-0 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-accent">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-secondary">Call Us</h3>
              <p className="mt-1.5 text-sm text-secondary-light font-normal">
                Local Line:{" "}
                <a href="tel:+94115927514" className="font-semibold text-primary hover:underline">
                  +94 11 592 7514
                </a>
              </p>
            </div>
          </div>

          {/* Card 3: Mail Details */}
          <div className="glass bg-white p-6 rounded-3xl border border-card-border flex items-start space-x-4 opacity-0 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-secondary">Email Us</h3>
              <p className="mt-1.5 text-sm text-secondary-light font-normal">
                General Queries:{" "}
                <a href="mailto:info@iconnhealthcare.org" className="font-semibold text-primary hover:underline">
                  info@iconnhealthcare.org
                </a>
              </p>
            </div>
          </div>

          {/* Card 4: Hours */}
          <div className="glass bg-white p-6 rounded-3xl border border-card-border flex items-start space-x-4 opacity-0 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-secondary">Working Hours</h3>
              <p className="mt-1.5 text-sm text-secondary-light font-normal">
                Monday - Friday: 8:30 AM - 5:00 PM <br />
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          {formSubmitted ? (
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-card-border text-center flex flex-col items-center justify-center space-y-6 shadow-sm animate-fade-in">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-secondary">Message Sent Successfully!</h3>
                <p className="text-sm text-secondary-light max-w-md mx-auto">
                  Thank you for contacting Iconn Healthcare. Our customer support representatives will review your request and reach out to you shortly.
                </p>
              </div>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-xl shadow-md transition-all cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form 
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="bg-white p-8 md:p-10 rounded-3xl border border-card-border space-y-6 shadow-sm opacity-0"
            >
              <h3 className="text-xl font-bold text-secondary">Send Us a Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-secondary-light">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-card-border rounded-xl text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-secondary-light">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-card-border rounded-xl text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="org" className="text-xs font-bold uppercase tracking-wider text-secondary-light">Organization (Optional)</label>
                <input
                  type="text"
                  id="org"
                  name="org"
                  value={formData.org}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-card-border rounded-xl text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Hospital, Laboratory, Pharmacy etc."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="msg" className="text-xs font-bold uppercase tracking-wider text-secondary-light">Message</label>
                <textarea
                  id="msg"
                  name="msg"
                  value={formData.msg}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-card-border rounded-xl text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-primary py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-teal-500/20 hover:bg-primary-hover hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <Send className="h-4.5 w-4.5" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Custom Vector Visual Map Section */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-card-border shadow-sm space-y-6">
        <h3 className="text-lg font-bold text-secondary">Our Location in Colombo 10</h3>
        <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-teal-500/5 to-accent-light/30 border border-card-border relative overflow-hidden flex items-center justify-center">
          
          {/* Custom Stylized Sri Lanka Map / Grid Background Graphic */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <svg className="w-full h-full absolute inset-0 text-primary-light/60" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50,150 Q 200,80 350,160 T 600,100 T 800,200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M 100,250 Q 300,180 500,260 T 900,180" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" />
            <circle cx="650" cy="140" r="8" fill="var(--primary)" className="animate-ping" opacity="0.3"/>
            <circle cx="650" cy="140" r="5" fill="var(--primary)"/>
          </svg>

          {/* Colombo Maradana Road Visual Marker Card */}
          <div className="relative z-10 glass bg-white p-5 rounded-2xl shadow-xl max-w-xs text-center border border-card-border">
            <MapPin className="h-6 w-6 text-primary mx-auto animate-bounce" />
            <h4 className="mt-2 text-sm font-bold text-secondary">Colombo 10 Office</h4>
            <p className="mt-1 text-xs text-secondary-light font-medium leading-relaxed">
              # 635, Maradana Road,<br />
              Colombo 10, Sri Lanka.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
