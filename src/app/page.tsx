import {
  Hero,
  TestimonialsPreview,
  CTABanner,
  InsuranceSection,
  BlogPreview,
  BookAppointmentSection,
  ServicesPreview,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="custom-gradient-to-l flex flex-col gap-12">
        <ServicesPreview />
        <TestimonialsPreview />
        <CTABanner />
        <InsuranceSection />
        <BlogPreview />
        <BookAppointmentSection />
      </div>
    </main>
  );
}
