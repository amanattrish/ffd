import {
  Hero,
  ServicesPreview,
  TestimonialsPreview,
  CTABanner,
  InsuranceSection,
  BlogPreview,
  BookAppointmentSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTABanner />
      <InsuranceSection />
      <BlogPreview />
      <BookAppointmentSection />
    </main>
  );
}
