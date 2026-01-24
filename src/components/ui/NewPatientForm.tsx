"use client";

import { useState } from "react";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { patientInfoContent } from "@/content";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  comments: string;
}

export default function NewPatientForm() {
  const { form } = patientInfoContent.newPatients;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const validate = (): boolean => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim()) return false;
    if (!emailRegex.test(formData.email)) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      // TODO: Implement form submission backend
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", comments: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <CheckCircle className="w-14 h-14 text-secondary mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-primary mb-2">Message Sent!</h3>
        <p className="text-[var(--text-secondary)]">{form.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <XCircle className="w-5 h-5 shrink-0" />
          <p>Please fill in Name and a valid Email Address.</p>
        </div>
      )}

      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={form.fields.name}
          className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={form.fields.email}
          className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={form.fields.phone}
          className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows={4}
          placeholder={form.fields.comments}
          className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-primary focus:outline-none resize-none"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-6 py-3 rounded-lg font-medium border-2 border-secondary bg-secondary/10 text-primary hover:bg-secondary hover:text-white transition-colors disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 inline animate-spin" />
              Sending...
            </>
          ) : (
            form.submit
          )}
        </button>
      </div>
    </form>
  );
}
