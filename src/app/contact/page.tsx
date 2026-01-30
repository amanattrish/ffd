"use client";

import { useState } from "react";
import Image from "next/image";
import { Book, Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { contactContent } from "@/content";
import { BookAppointmentSection, CTABanner } from "@/components/sections";
import TextInput from "@/components/form-elements/TextInput";
import TextArea from "@/components/form-elements/TextArea";

export default function ContactPage() {
  const { getInTouch, form, clinicAddress, hours, whatsapp, map } = contactContent;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const filterName = (v: string) => v.replace(/[^a-zA-Z\s\-'.]/g, "");
  const maxMessageChars = 200;
  const capToMaxChars = (s: string) => s.slice(0, maxMessageChars);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!emailRegex.test(formData.email)) next.email = "Please enter a valid email address";
    if (!formData.message.trim()) next.message = "Message is required";
    else if (formData.message.length > maxMessageChars) next.message = `Maximum ${maxMessageChars} characters allowed.`;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setErrors({});

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      {/* Page Title */}
      <Section className="relative py-12!" background="gradient">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="heading-3">
            Contact Us
          </h1>
        </div>
      </Section>
      {/* Get in Touch & Form Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 mb-16">
          {/* Left Column - Get in Touch */}
          <div>
            <h2 className="heading-3 font-bold! mb-6">
              <span className="text-[#4D99C6]">Get in</span>{" "}
              <span className="text-[#90C044]">Touch</span>
            </h2>
            <p className="body-text font-semibold!">
              {getInTouch.description}
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="text-center py-12 bg-gray-50 rounded-2xl p-8">
                <span className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </span>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-secondary mb-6">{form.successMessage}</p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">

                {/* Name */}
                <div>
                  <TextInput
                    className="h-12"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    maxLength={20}
                    error={errors.name}
                    onChange={(e) => {
                      const v = filterName(e.target.value).slice(0, 20);
                      setFormData({ ...formData, name: v });
                      setErrors((p) => ({ ...p, name: "" }));
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <TextInput
                    className="h-12"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    error={errors.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setErrors((p) => ({ ...p, email: "" }));
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <TextInput
                    className="h-12"
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                {/* Message */}
                <div>
                  <TextArea
                    id="message"
                    rows={5}
                    placeholder="Questions or Comments?"
                    value={formData.message}
                    error={errors.message}
                    onChange={(e) => {
                      const v = capToMaxChars(e.target.value);
                      setFormData({ ...formData, message: v });
                      setErrors((p) => ({ ...p, message: "" }));
                    }}
                  />

                  <div className="flex justify-between items-center gap-2 mt-1">
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                    <p
                      className={`text-sm ml-auto shrink-0 ${formData.message.length > maxMessageChars
                          ? "text-red-500"
                          : "text-gray-500"
                        }`}
                    >
                      {formData.message.length}/{maxMessageChars} characters
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="secondary"
                  className="w-40 border border-secondary bg-transparent text-black! hover:text-muted-lighter! font-semibold"
                >
                  {isSubmitting ? "Submitting..." : form.submitButton}
                </Button>

              </form>

            )}
          </div>
        </div>

        {/* Clinic Address & Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Clinic Address */}
          <div>
            <h2 className="subheading mb-4 font-semibold!">
              {clinicAddress.title}
            </h2>
            <div className="space-y-1 body-text font-medium">
              <p className="">{clinicAddress.name}</p>
              <p className="">{clinicAddress.street}</p>
              <p className="">{clinicAddress.city}</p>
            </div>
          </div>

          {/* Right Column - Clinic Image */}
          <div className="relative rounded-xl overflow-hidden">
            <div className="relative aspect-square h-64 w-full">
              <Image
                src="/images/clinic.png"
                alt="Clinic Interior"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg">
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
        </div>

        {/* Office Hours & WhatsApp Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Office Hours */}
          <div>
            <h2 className="subheading font-bold! mb-4">
              {hours.title}
            </h2>
            <div className="space-y-1">
              {hours.schedule.map((item, index) => (
                <div key={index} className="text-black">
                  <span className="font-medium">{item.day}:</span>{" "}
                  <span
                    className={` body-text ${
                      
                      item.hours === "Closed"
                        ? "text-black!"
                        : "text-primary!"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - WhatsApp */}
          <div>
            <h2 className="subheading font-bold! mb-4">
              {whatsapp.title}
            </h2>
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-all hover:opacity-90"
            >
              <Image
                src="/images/whatsapp-button.png"
                alt="WhatsApp - Click to chat"
                width={200}
                height={60}
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
      </Section>
        <CTABanner />
        <BookAppointmentSection background="transparent" />
    </>
  );
}
