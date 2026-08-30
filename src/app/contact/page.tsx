"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  ExternalLink,
  Globe,
  Share2,
  AtSign,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Get in Touch
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="gold-text">Contact</span>{" "}
            <span className="text-cream">Us</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Have a question, feedback, or want to make a reservation? We&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="text-center py-20 animate-fade-in-up">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green/20 flex items-center justify-center">
                  <CheckCircle size={40} className="text-green-light" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-cream mb-4">
                  Message Sent!
                </h2>
                <p className="text-cream/60 mb-8">
                  Thank you, {form.name}. We&apos;ll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="px-8 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-cream mb-6 flex items-center gap-3">
                  <MessageSquare size={24} className="text-gold" />
                  Send a Message
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-cream/60 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-cream/60 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-cream/60 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-cream/60 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => updateForm("subject", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Query</option>
                      <option value="feedback">Feedback</option>
                      <option value="events">Event Enquiry</option>
                      <option value="catering">Catering Service</option>
                      <option value="collaboration">Business Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-cream/60 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => updateForm("message", e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-dark font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-dark-card border border-gold/10">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Persona+Restaurant+Patliputra+Colony+Patna+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-cream/60 hover:text-gold transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-cream mb-1">Address</div>
                    <span className="text-sm">
                      Plot 39/A, Ward 22/B (Plot 3A), Patliputra Colony,
                      Patna, Bihar – 800013
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919798956743"
                  className="flex items-start gap-4 text-cream/60 hover:text-gold transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-cream mb-1">Phone</div>
                    <span className="text-sm block">
                      +91 97989 56743
                    </span>
                    <span className="text-sm block">
                      +91 92416 02606
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@personapatna.com"
                  className="flex items-start gap-4 text-cream/60 hover:text-gold transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-cream mb-1">Email</div>
                    <span className="text-sm">info@personapatna.com</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-cream/60">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-cream mb-1">Hours</div>
                    <span className="text-sm block">
                      Mon–Wed, Fri–Sun: 11:00 AM – 11:00 PM
                    </span>
                    <span className="text-sm block">
                      Thursday: 11:30 AM – 11:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl bg-dark-card border border-gold/10">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold mb-4">
                Follow Us
              </h3>
              <p className="text-cream/50 text-sm mb-4">
                Stay connected for updates, offers, and more.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Globe, label: "Instagram" },
                  { icon: Share2, label: "Facebook" },
                  { icon: AtSign, label: "Twitter" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-12 h-12 rounded-xl border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-2xl bg-dark-card border border-gold/10">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+919798956743"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold hover:bg-gold/20 transition-all text-sm font-medium"
                >
                  <Phone size={18} />
                  Call Now
                  <ExternalLink size={14} className="ml-auto opacity-50" />
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Persona+Restaurant+Patliputra+Colony+Patna+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-gold/20 text-cream/60 hover:text-gold hover:bg-gold/5 transition-all text-sm font-medium"
                >
                  <MapPin size={18} />
                  Get Directions
                  <ExternalLink size={14} className="ml-auto opacity-50" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="p-6 rounded-2xl bg-dark-card border border-gold/10">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold mb-4">
                Find Us
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden relative border border-gold/10">
                <iframe
                  src="https://www.google.com/maps?q=Persona+Restaurant+Patliputra+Colony+Patna+Bihar&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Persona+Restaurant+Patliputra+Colony+Patna+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 text-gold text-sm hover:text-gold-light transition-colors"
              >
                Open in Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
