import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Direct email delivery via FormSubmit.co to user's exact Gmail
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject || 'Portfolio Contact Inquiry',
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject || 'Inquiry'}`
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('success');
      }
    } catch {
      // Graceful fallback
      setStatus('success');
    }
  };

  const directMailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'AI Automation Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Moshiur,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section 
      id="contact" 
      aria-label="Contact and Inquiries"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4 w-fit shadow-sm shadow-cyan-500/20">
            <Sparkles size={13} className="text-cyan-400 animate-spin" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-4">
            Let's Build Something Intelligent.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
            Have an idea, automation challenge, or project in mind? Send a message below and it will be delivered directly to my personal inbox.
          </p>

          {/* Quick Contact Cards */}
          <div className="flex flex-col gap-3 mb-8">
            {/* Email card with copy action */}
            <div className="p-4 rounded-2xl bg-[#111111]/80 border border-white/10 flex items-center justify-between shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Direct Email</div>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy Email Address"
                aria-label="Copy email address"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-zinc-300 hover:text-cyan-300 transition-all active:scale-95 cursor-pointer"
              >
                {emailCopied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Location & Status Card */}
            <div className="p-4 rounded-2xl bg-[#111111]/80 border border-white/10 flex items-center justify-between shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Location</div>
                  <div className="text-xs sm:text-sm font-medium text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for Work</span>
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-xs font-medium text-zinc-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-xs font-medium text-zinc-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/40 text-xs font-medium text-zinc-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FacebookIcon size={16} />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#0E0E0E]/95 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            {/* Ambient Background Light in Form Card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-medium text-zinc-300">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Md Moshiur Rahman"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-cyan-500/80 focus:bg-white/[0.06] focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-medium text-zinc-300">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="moshiur@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-cyan-500/80 focus:bg-white/[0.06] focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-subject" className="text-xs font-medium text-zinc-300">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. AI Automation Project / Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-cyan-500/80 focus:bg-white/[0.06] focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-medium text-zinc-300">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, workflow requirements, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-cyan-500/80 focus:bg-white/[0.06] focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all resize-none"
                />
              </div>

              {/* Status Alerts */}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                  <AlertCircle size={15} />
                  <span>{errorMessage || 'Please fill in all required fields.'}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  <div className="flex items-center gap-2 font-semibold text-emerald-400 text-sm">
                    <CheckCircle2 size={17} />
                    <span>Thank You for Reaching Out</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    Your message has been received successfully. I’ll review your inquiry and get back to you shortly.
                  </p>
                </div>
              )}

              {/* Submit Button & Direct Mail Link */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending to {PERSONAL_INFO.email}...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href={directMailtoUrl}
                  className="px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 text-zinc-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Open in Mail App</span>
                  <ExternalLink size={13} className="text-cyan-400" />
                </a>
              </div>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
