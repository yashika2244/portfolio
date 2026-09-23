import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Mail, MapPin, Send, Github, Linkedin, Clock, Sparkles, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "yashika123",
        "template_8trbs77",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Inquiry",
          message: formData.message,
        },
        "ZQQdhRIPdRbJM19pF"
      )
      .then(
        () => {
          toast.success("Message sent successfully! I'll get back to you soon ✨");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please reach out directly via email.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden bg-grid-mesh">
      {/* Decorative ambient blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#EAF2FF] via-[#EAF2FF]/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2FF] border border-[#1769FF]/20 text-[#1769FF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight">
            Let’s build something great together.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Whether you have an internship opportunity, a project to collaborate on, or just want to connect, feel free to reach out.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Primary Email Card */}
            <div className="bg-white border border-[#EAF2FF] rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(7,26,51,0.04)]">
              <h3 className="text-xl font-extrabold text-[#071A33] mb-2">
                Direct Communication
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Drop me a direct line anytime. I respond promptly to internship and development inquiries.
              </p>

              <div className="space-y-3.5">
                {/* Email Item */}
                <a
                  href="mailto:chauhanyashika820@gmail.com"
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#EAF2FF]/60 border border-[#1769FF]/20 hover:border-[#1769FF] hover:bg-[#EAF2FF] transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-white text-[#1769FF] shadow-xs group-hover:bg-[#1769FF] group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-slate-500 block">Direct Email</span>
                    <span className="text-sm font-bold text-[#071A33] break-all group-hover:text-[#1769FF] transition-colors">
                      chauhanyashika820@gmail.com
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-2.5 rounded-xl bg-white text-[#1769FF] shadow-xs shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Based In</span>
                    <span className="text-sm font-bold text-[#071A33]">
                      Bijnor, Uttar Pradesh, India
                    </span>
                  </div>
                </div>

                {/* Response Badge */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="mt-8 pt-6 border-t border-[#EAF2FF]">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Online Presence
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/yashika2244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#EAF2FF] hover:border-slate-400 hover:shadow-xs transition text-slate-700 font-bold text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-[#071A33]" />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/yashika22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#EAF2FF]/70 border border-[#1769FF]/20 hover:border-[#1769FF] hover:shadow-xs transition text-[#1769FF] font-bold text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#1769FF]" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#1769FF]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-[#EAF2FF] rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(7,26,51,0.04)]"
          >
            <h3 className="text-xl font-extrabold text-[#071A33] mb-1">
              Send a Message
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Share details about your team, project, or role, and I will be in touch shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-[#1769FF]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-[#071A33] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769FF]/20 focus:border-[#1769FF] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-[#1769FF]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-[#071A33] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769FF]/20 focus:border-[#1769FF] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Project Collaboration"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-[#071A33] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769FF]/20 focus:border-[#1769FF] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message <span className="text-[#1769FF]">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Yashika, I'd like to talk about..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-[#071A33] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769FF]/20 focus:border-[#1769FF] transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(23,105,255,0.25)] transition-all duration-200 cursor-pointer ${
                  loading
                    ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                    : "bg-[#1769FF] hover:bg-[#071A33] text-white active:scale-98"
                }`}
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
