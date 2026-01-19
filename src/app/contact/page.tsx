"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { contactContent } from "@/content";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
};

export default function ContactPage() {
  const { hero, contactInfo, hours, form, map } = contactContent;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-1)] py-20 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">+</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-3xl font-light">+</div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {hero.title}
          </h1>
          <p className="text-xl text-white/90 mb-2">{hero.subtitle}</p>
          <p className="text-white/80 max-w-2xl mx-auto">{hero.description}</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              {contactInfo.title}
            </h2>

            <div className="space-y-6 mb-10">
              {contactInfo.items.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Phone;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.type === "address" ? "_blank" : undefined}
                    rel={item.type === "address" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <span className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                      <IconComponent className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">
                        {item.label}
                      </p>
                      <p className="text-[var(--text-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="font-bold text-[var(--text-primary)]">{hours.title}</h3>
              </div>
              <div className="space-y-2">
                {hours.schedule.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">{item.day}</span>
                    <span
                      className={
                        item.hours === "Closed"
                          ? "text-red-500"
                          : "text-[var(--text-primary)] font-medium"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                {form.title}
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">{form.description}</p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <span className="w-16 h-16 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" />
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-secondary)]">{form.successMessage}</p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-[var(--text-primary)] mb-1"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-[var(--text-primary)] mb-1"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--text-primary)] mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[var(--text-primary)] mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[var(--text-primary)] mb-1"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Schedule an Appointment</option>
                      <option value="question">General Question</option>
                      <option value="insurance">Insurance Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--text-primary)] mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {form.submitButton}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="gray">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">
          {map.title}
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src={map.embedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Freeport Family Dentistry Location"
          />
        </div>
      </Section>
    </>
  );
}
