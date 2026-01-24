"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { contactContent } from "@/content";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const { form } = contactContent;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isValidationError, setIsValidationError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const filterName = (v: string) => v.replace(/[^a-zA-Z\s\-'.]/g, "");
  const maxNameChars = 20;
  const maxMessageChars = 200;
  const capToMaxChars = (s: string) => s.slice(0, maxMessageChars);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let val: string;
    if (name === "firstName" || name === "lastName") val = filterName(value).slice(0, maxNameChars);
    else if (name === "message") val = capToMaxChars(value);
    else val = value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    setStatus((prev) => (prev === "error" ? "idle" : prev));
    setIsValidationError(false);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (): boolean => {
    if (!formData.firstName.trim()) return false;
    if (!formData.lastName.trim()) return false;
    if (!formData.email.trim()) return false;
    if (!emailRegex.test(formData.email)) return false;
    if (!formData.subject) return false;
    if (!formData.message.trim()) return false;
    if (formData.message.length > maxMessageChars) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setIsValidationError(true);
      setStatus("error");
      return;
    }
    setIsValidationError(false);
    setStatus("submitting");

    try {
      // TODO: Implement AWS SES backend
      // For now, simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setIsValidationError(false);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-primary mb-2">
          Message Sent!
        </h3>
        <p className="text-secondary">{form.successMessage}</p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <XCircle className="w-5 h-5 flex-shrink-0" />
          <p>{isValidationError
            ? ((form as { validationErrorMessage?: string }).validationErrorMessage ?? "Please fill in all required fields correctly.")
            : form.errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            maxLength={maxNameChars}
            placeholder="John"
            className="w-full"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            maxLength={maxNameChars}
            placeholder="Doe"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="w-full"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full"
        >
          <option value="">Select a subject</option>
          <option value="appointment">Schedule an Appointment</option>
          <option value="question">General Question</option>
          <option value="insurance">Insurance Inquiry</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="How can we help you?"
          className="w-full resize-none"
        />
        <p className={`text-sm mt-1 text-right ${formData.message.length > maxMessageChars ? "text-red-500" : "text-gray-500"}`}>
          {formData.message.length}/{maxMessageChars} characters
        </p>
      </div>

      {/* Submit Button */}
      <Button type="submit" disabled={status === "submitting"} fullWidth>
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            {form.submitButton}
          </>
        )}
      </Button>
    </form>
  );
}
