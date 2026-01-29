import { homeContent } from '@/content';
import { Check } from 'lucide-react';
import React, { useState } from 'react'
import Label from '../form-elements/Label';
import TextInput from '../form-elements/TextInput';


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Allow only letters, spaces, hyphen, apostrophe, period (e.g. O'Brien, Jr.)
const filterName = (v: string) => v.replace(/[^a-zA-Z\s\-'.]/g, "");
// Allow only digits and / or - for DD/MM/YYYY
const filterDate = (v: string) => v.replace(/[^0-9/\-]/g, "");
// Allow letters, numbers, spaces, comma, period, hyphen for location/address
const filterLocation = (v: string) => v.replace(/[^a-zA-Z0-9\s,.\-]/g, "");

/** Returns: "invalid" | "past" | null (valid, today or future) */
function checkDate(str: string): "invalid" | "past" | null {
    const s = str.trim();
    if (!s) return "invalid";
    const parts = s.split(/[\/\-]/);
    if (parts.length !== 3) return "invalid";
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    if (isNaN(day) || isNaN(month) || isNaN(year) || month < 0 || month > 11) return "invalid";
    const d = new Date(year, month, day);
    if (d.getDate() !== day || d.getMonth() !== month || d.getFullYear() !== year) return "invalid";
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    d.setHours(0, 0, 0, 0);
    return d < today ? "past" : null;
}


const EnquiryForm = () => {
    const { hero } = homeContent;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        location: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const validate = () => {
        const next: Record<string, string> = {};
        if (!formData.name.trim()) next.name = "Name is required";
        if (!formData.email.trim()) next.email = "Email is required";
        else if (!emailRegex.test(formData.email)) next.email = "Please enter a valid email";
        if (!formData.date.trim()) next.date = "Date is required";
        else {
            const r = checkDate(formData.date);
            if (r === "invalid") next.date = "Please enter a valid date (DD/MM/YYYY)";
            else if (r === "past") next.date = "Please select a date today or in the future";
        }
        if (!formData.location.trim()) next.location = "Location is required";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        setErrors({});
        await new Promise((r) => setTimeout(r, 800));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", date: "", location: "" });
    };
    return (
        <>
            {
                isSubmitted ? (
                    <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] px-5 md:px-6 lg:px-8 py-8 md:py-10 text-center">
                        <span className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                            <Check className="w-7 h-7 text-white" />
                        </span>
                        <h3 className="text-lg font-bold text-primary mb-2">{hero.form.title}</h3>
                        <p className="text-secondary text-sm mb-4">{hero.enquirySuccessMessage ?? "Thank you! We'll get back to you shortly."}</p>
                        <button
                            type="button"
                            onClick={() => setIsSubmitted(false)}
                            className="text-primary font-semibold text-sm hover:underline"
                        >
                            {hero.form.sendAnother}
                        </button>
                    </div>
                ) :
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] px-5 md:px-6 lg:px-8 py-5 md:py-6"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6 items-start">

                            <div className="">
                                <Label htmlFor="hero-name" required>
                                    {hero.form.fields.name.label}
                                </Label>
                                <TextInput
                                    id="hero-name"
                                    placeholder={hero.form.fields.name.placeholder}
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

                            <div className="">
                                <Label htmlFor="hero-date" required>
                                    {hero.form.fields.date.label}
                                </Label>
                                <TextInput
                                    id="hero-date"
                                    placeholder={hero.form.fields.date.placeholder}
                                    value={formData.date}
                                    error={errors.date}
                                    onChange={(e) => {
                                        const v = filterDate(e.target.value);
                                        setFormData({ ...formData, date: v });
                                        setErrors((p) => ({ ...p, date: "" }));
                                    }}
                                />
                            </div>

                            <div className="">
                                <Label htmlFor="hero-email" required>
                                    {hero.form.fields.email.label}
                                </Label>
                                <TextInput
                                    id="hero-email"
                                    type="email"
                                    placeholder={hero.form.fields.email.placeholder}
                                    value={formData.email}
                                    error={errors.email}
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value });
                                        setErrors((p) => ({ ...p, email: "" }));
                                    }}
                                />
                            </div>

                            <div className="">
                                <Label htmlFor="hero-location" required>
                                    {hero.form.fields.location.label}
                                </Label>
                                <TextInput
                                    id="hero-location"
                                    placeholder={hero.form.fields.location.placeholder}
                                    value={formData.location}
                                    error={errors.location}
                                    onChange={(e) => {
                                        const v = filterLocation(e.target.value);
                                        setFormData({ ...formData, location: v });
                                        setErrors((p) => ({ ...p, location: "" }));
                                    }}
                                />
                            </div>

                            <div className="flex items-center md:col-span-1 col-span-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-primary text-white font-bold text-sm sm:text-base lg:text-lg text-center py-4 rounded-full shadow-lg hover:bg-primary-hover transition-all duration-200 w-full disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                                >
                                    {isSubmitting
                                        ? hero.form.submittingButton
                                        : hero.form.submitButton}
                                </button>
                            </div>

                        </div>
                    </form>
            }
        </>
    )
}

export default EnquiryForm