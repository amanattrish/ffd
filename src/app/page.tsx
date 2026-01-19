import {
  Hero,
  AboutPreview,
  ServicesPreview,
  TestimonialsPreview,
  CTABanner,
  InsuranceSection,
  BlogPreview,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTABanner />
      <InsuranceSection />
      <BlogPreview />
    </>
  );
}
