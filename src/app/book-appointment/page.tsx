import { Phone, Clock, MapPin, Check } from "lucide-react";
import Section from "@/components/ui/Section";
import { contactContent, siteConfig } from "@/content";

export const metadata = {
  title: "Book Appointment | Freeport Family Dentistry",
  description: "Schedule your dental appointment online with Freeport Family Dentistry",
};

const benefits = [
  "Easy online scheduling",
  "Instant confirmation",
  "Reminder notifications",
  "Flexible appointment times",
];

export default function BookAppointmentPage() {
  const { hours } = contactContent;

  return (
    <div className="text-center">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#F2FDFF] to-white  py-16 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl! font-light">+</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-3xl! font-light">+</div>

        <div className="container mx-auto px-4 text-center! relative z-10">
          <h1 className="text-3xl! font-bold text-black !mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl! text-black/90 mx-auto">
            Schedule your visit online in just a few clicks
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <Section background="white">
        <div className="grid gap-12">
          {/* Left Sidebar - Info */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            {/* Benefits */}
            <div className="bg-linear-to-br from-[#F2FDFF] to-white  rounded-2xl! p-6 text-primary !mb-6">
              <h3 className="text-lg font-bold !mb-4 text-center">Why Book Online?</h3>
              <div className="flex justify-center items-center">
              <ul className="space-y-2! flex flex-col items-left mx-auto">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent-1 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-black" />
                    </span>
                    <span className="text-black/90">{benefit}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-linear-to-br from-[#F2FDFF] to-white rounded-2xl! p-6 !mb-6">
              <h3 className="font-bold text-primary !mb-4">
                Prefer to Call?
              </h3>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center justify-center gap-3 text-primary font-semibold hover:underline"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
            </div>

            {/* Office Hours */}
            <div className="bg-linear-to-br from-[#F2FDFF] to-white rounded-2xl! p-6 !mb-6">
              <div className="flex items-center justify-center gap-3 !mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-primary">{hours.title}</h3>
              </div>
              <div className="space-y-2!">
                {hours.schedule.map((item, index) => (
                  <div key={index} className="w-[280px] mx-auto flex justify-between text-sm">
                    <span className="text-secondary">{item.day}</span>
                    <span
                      className={
                        item.hours === "Closed"
                          ? "text-red-500"
                          : "text-primary font-medium"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-linear-to-br from-[#F2FDFF] to-white rounded-2xl! p-6">
              <div className="flex items-center justify-center gap-3 !mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-primary">Our Location</h3>
              </div>
              <p className="text-secondary text-sm">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
            </div>
          </div>

          {/* Calendly E!mbed */}
          {/* 
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-linear-to-br from-[#F2FDFF] to-white rounded-2xl! p-6 lg:p-8">
              <h2 className="text-2xl! font-bold text-primary !mb-2">
                Select a Date & Time
              </h2>
              <p className="text-secondary !mb-6">
                Choose a convenient time slot for your visit. You will receive a confirmation email once your appointment is booked.
              </p>

              <div className="bg-white rounded-xl! border border-gray-200 min-h-[600px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto !mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl! font-bold text-primary !mb-2">
                    Calendly Booking Widget
                  </h3>
                  <p className="text-secondary !mb-4 max-w-md">
                    The Calendly scheduling widget will be e!mbedded here.
                    Replace this placeholder with your Calendly e!mbed code.
                  </p>
                  <code className="text-sm bg-gray-100 px-4 py-2 rounded-lg block max-w-md mx-auto">
                    {`<div class="calendly-inline-widget" data-url="YOUR_CALENDLY_URL"></div>`}
                  </code>
                </div>
              </div>

              Alternative: Uncomment and configure the Calendly e!mbed script
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/freeportfamilydentistry/appointment"
                style={{ minWidth: '320px', height: '600px' }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>
          </div>
          */}
        </div>
      </Section>

      {/* Emergency CTA */}
      <Section background="gray">
        <div className="max-w-2xl! mx-auto text-center">
          <h2 className="text-2xl! font-bold text-primary !mb-4">
            Dental Emergency?
          </h2>
          <p className="text-secondary !mb-6">
            If you are experiencing a dental emergency, please call us immediately.
            We offer same-day emergency appointments.
          </p>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </Section>
    </div>
  );
}
