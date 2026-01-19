import Image from "next/image";
import { Star, Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

// Extended testimonials for the full page
const allTestimonials = [
  ...homeContent.testimonials.items,
  {
    id: "4",
    name: "Robert Chen",
    content: "Had my first dental implant done here and couldn't be happier with the results. The team explained every step and made sure I was comfortable throughout. Highly recommend for anyone considering implants.",
    rating: 5,
    image: null,
  },
  {
    id: "5",
    name: "Lisa Martinez",
    content: "Finally found a dentist my kids actually want to visit! The staff is so patient and kind with children. They make dental visits fun and stress-free for the whole family.",
    rating: 5,
    image: null,
  },
  {
    id: "6",
    name: "James Wilson",
    content: "Emergency tooth extraction handled with care and professionalism. They got me in the same day and the procedure was quick and painless. So grateful for this team!",
    rating: 5,
    image: null,
  },
  {
    id: "7",
    name: "Amanda Taylor",
    content: "Best dental experience I've ever had. The office is modern and clean, the staff is friendly, and Dr. Smith takes the time to really listen to your concerns. Five stars all around!",
    rating: 5,
    image: null,
  },
  {
    id: "8",
    name: "David Brown",
    content: "Got my Invisalign treatment here and the results exceeded my expectations. The team was supportive throughout the entire process and my smile has never looked better.",
    rating: 5,
    image: null,
  },
  {
    id: "9",
    name: "Jennifer Adams",
    content: "The teeth whitening treatment was amazing! Saw visible results after just one session. The staff made sure I was comfortable and explained the entire process beforehand.",
    rating: 5,
    image: null,
  },
];

// Google G Logo SVG
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export const metadata = {
  title: "Patient Testimonials | Freeport Family Dentistry",
  description: "Read what our patients say about their experience at Freeport Family Dentistry",
};

export default function TestimonialsPage() {
  const averageRating = (
    allTestimonials.reduce((sum, t) => sum + t.rating, 0) / allTestimonials.length
  ).toFixed(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-1)] py-20 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">+</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-3xl font-light">+</div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Patient Testimonials
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Real stories from our valued patients
          </p>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-white">{averageRating}</p>
              <p className="text-white/80 text-sm">{allTestimonials.length} Reviews</p>
            </div>
            <GoogleIcon className="w-8 h-8" />
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <Section background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header with Google Icon and Quote */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-[var(--color-accent-1)] opacity-50" />
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                  <GoogleIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] flex-shrink-0">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leave a Review CTA */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center">
          <GoogleIcon className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Share Your Experience
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            We value your feedback! If you&apos;ve had a positive experience at our practice,
            we&apos;d appreciate it if you could share your story on Google.
          </p>
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border-2 border-gray-200 text-[var(--text-primary)] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            <GoogleIcon className="w-5 h-5 mr-2" />
            Leave a Google Review
          </a>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-1)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Happy Patients?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Experience the difference at Freeport Family Dentistry. Book your appointment today.
          </p>
          <Button href="/book-appointment" variant="secondary" size="lg">
            Book Appointment
          </Button>
        </div>
      </section>
    </>
  );
}
