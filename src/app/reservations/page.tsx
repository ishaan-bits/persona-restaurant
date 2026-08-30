"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Phone,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  MapPin,
  CreditCard,
  UtensilsCrossed,
} from "lucide-react";

const timeSlots = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, "9+"];

const diningPartners = [
  {
    name: "EazyDiner",
    desc: "Up to 40% off on pre-booking",
    color: "from-blue-500/20 to-blue-600/20",
    border: "border-blue-500/30",
    href: "https://www.eazydiner.com/patna/persona-patliputra-colony-patna-692467",
  },
  {
    name: "Swiggy Dineout",
    desc: "Up to 30% off + extra discounts",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
    href: "https://www.swiggy.com/dineout",
  },
  {
    name: "District",
    desc: "Exclusive deals and cashbacks",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    href: "https://www.district.in/",
  },
];

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    specialRequests: "",
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Reservations
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="gold-text">Book Your</span>{" "}
            <span className="text-cream">Table</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Reserve your spot for an unforgettable dining experience. Walk-ins
            welcome, but reservations ensure the best tables.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="text-center py-20 animate-fade-in-up">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green/20 flex items-center justify-center">
                  <CheckCircle size={40} className="text-green-light" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-cream mb-4">
                  Reservation Confirmed!
                </h2>
                <p className="text-cream/60 mb-2">
                  Thank you, {form.name}. Your table has been reserved.
                </p>
                <p className="text-cream/40 text-sm mb-8">
                  A confirmation has been sent to {form.email || "your email"}.
                  <br />
                  For changes, call us at +91 97989 56743.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      date: "",
                      time: "",
                      guests: "",
                      occasion: "",
                      specialRequests: "",
                    });
                  }}
                  className="px-8 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-cream mb-6 flex items-center gap-3">
                    <User size={24} className="text-gold" />
                    Personal Details
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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="md:col-span-2">
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
                  </div>
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-cream mb-6 flex items-center gap-3">
                    <Calendar size={24} className="text-gold" />
                    Reservation Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm text-cream/60 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => updateForm("date", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-cream/60 mb-2">
                        Time *
                      </label>
                      <select
                        required
                        value={form.time}
                        onChange={(e) => updateForm("time", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-cream/60 mb-2">
                        Guests *
                      </label>
                      <select
                        required
                        value={form.guests}
                        onChange={(e) => updateForm("guests", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold"
                      >
                        <option value="">Select guests</option>
                        {partySizes.map((s) => (
                          <option key={s} value={s}>
                            {s} {s === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-cream/60 mb-2">
                      Special Occasion
                    </label>
                    <select
                      value={form.occasion}
                      onChange={(e) => updateForm("occasion", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold"
                    >
                      <option value="">None</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="date">Date Night</option>
                      <option value="business">Business Meeting</option>
                      <option value="celebration">Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-cream/60 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    value={form.specialRequests}
                    onChange={(e) =>
                      updateForm("specialRequests", e.target.value)
                    }
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-dark-card text-cream border border-gold/20 focus:border-gold resize-none"
                    placeholder="Dietary requirements, seating preference, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-dark font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 text-lg"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Info Card */}
            <div className="p-6 rounded-2xl bg-dark-card border border-gold/10">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold mb-4">
                Reservation Info
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-cream/60">
                  <Clock size={18} className="text-gold shrink-0" />
                  <span>Reservations held for 15 minutes past booking time</span>
                </div>
                <div className="flex items-center gap-3 text-cream/60">
                  <Users size={18} className="text-gold shrink-0" />
                  <span>Groups of 9+ please call for arrangements</span>
                </div>
                <div className="flex items-center gap-3 text-cream/60">
                  <UtensilsCrossed size={18} className="text-gold shrink-0" />
                  <span>Average cost: ₹1,200–₹1,600 for two</span>
                </div>
                <div className="flex items-center gap-3 text-cream/60">
                  <CreditCard size={18} className="text-gold shrink-0" />
                  <span>Card, cash, UPI accepted</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="p-6 rounded-2xl bg-dark-card border border-gold/10">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold mb-4">
                Need Help?
              </h3>
              <p className="text-cream/50 text-sm mb-4">
                For large groups or special arrangements, call us directly.
              </p>
              <a
                href="tel:+919798956743"
                className="flex items-center gap-3 p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold hover:bg-gold/20 transition-all"
              >
                <Phone size={20} />
                <div>
                  <div className="font-semibold">+91 97989 56743</div>
                  <div className="text-xs text-cream/40">
                    Mon–Sun, 11 AM – 11 PM
                  </div>
                </div>
              </a>
            </div>

            {/* Dining Partners */}
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold mb-4">
                Book via Partners
              </h3>
              <div className="space-y-3">
                {diningPartners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-4 rounded-xl bg-gradient-to-r ${partner.color} border ${partner.border} cursor-pointer hover:scale-[1.02] transition-transform`}
                  >
                    <div className="font-semibold text-cream text-sm">
                      {partner.name}
                    </div>
                    <div className="text-cream/50 text-xs mt-0.5">
                      {partner.desc}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Preview */}
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
              <p className="text-cream/40 text-xs mt-3">
                Plot 39/A, Patliputra Colony, Patna – 800013
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
