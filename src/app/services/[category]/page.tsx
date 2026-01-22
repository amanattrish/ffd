import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceFaqAccordion from "@/components/ServiceFaqAccordion";
import { servicesContent } from "@/content";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return servicesContent.categories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category: categoryId } = await params;
  const category = servicesContent.categories.find((c) => c.id === categoryId);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.title} | Freeport Family Dentistry`,
    description: category.description,
  };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category: categoryId } = await params;
  const category = servicesContent.categories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#F2FDFF] py-16 overflow-hidden">


        
          {/* <Link
            href="/services"
            className="inline-flex items-center text-white/80 hover:text-white !mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link> */}

          <h1 className="text-3xl font-bold text-black text-center !mb-4 bg-linear-to-br from-[#F2FDFF] to-white">
            {category.title}
          </h1>
          {/* <p className="text-xl text-white/90 max-w-2xl">{category.description}</p> */}

      </section>

      {/* Services - Detailed Sections */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          {category.services.map((service, idx) => {
            const titleParts = service.title.split("&");
            const leftTitle = titleParts[0]?.trim();
            const rightTitle = titleParts[1]?.trim();

            return (
              <div key={service.id} className="!mb-16 lg:!mb-20">
                {/* Service Header */}
                <div className="flex flex-col lg:flex-row gap-8 !mb-12">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 !mb-8">
                      <h2 className="text-3xl lg:text-4xl font-bold">
                        <span className="text-primary">{leftTitle}</span>
                        {service.title.includes("&") && (
                          <>
                            <span className="text-primary px-2">&</span>
                            <span className="text-[#A1C65D]">{rightTitle}</span>
                          </>
                        )}
                      </h2>
                    </div>

                    {/* Service Image */}
                    <div className="!mb-8">
                      <div className="relative w-full lg:w-72 h-64 rounded-lg overflow-hidden">
                        <Image
                          src={service.image || "/images/about-clinic.png"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 !mb-6 leading-relaxed">
                      {service.overview}
                    </p>

                    {/* Symptoms Section */}
                    {service.symptoms && service.symptoms.length > 0 && (
                      <div className="!mb-6">
                        <h3 className="text-xl font-bold text-gray-900 !mb-3">Symptoms:</h3>
                        <ul className="space-y-2">
                          {service.symptoms.map((symptom, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2 text-gray-700">
                              <span className="text-[#2d7a9e] font-bold mt-1">•</span>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Procedures Section */}
                    {service.procedure && service.procedure.length > 0 && (
                      <div className="!mb-6">
                        <h3 className="text-xl font-bold text-gray-900 !mb-3">Procedure:</h3>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                          {service.procedure.map((step, pIdx) => (
                            <p key={pIdx}>{step}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* FAQs Section */}
                    {service.faqs && service.faqs.length > 0 && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 !mb-3">FAQs:</h3>
                        <ServiceFaqAccordion faqs={service.faqs} />
                      </div>
                    )}
                  </div>

                  {/* Sidebar - Desktop */}
                  <div className="hidden lg:block w-72">
                    <div className="sticky top-6">
                      {/* Outer Gray Container */}
                      <div className="bg-gray-100 rounded-lg overflow-hidden p-4">
                        {/* Call-to-Action Section */}
                        <div className="bg-[#2d7a9e] rounded-t-lg p-2">
                          <h3 className="text-lg font-bold text-white mb-4">Schedule Today</h3>
                          
                          {/* Request Appointment Button */}
                          <Link
                            href="/book-appointment"
                            className="block w-full bg-[#A1C65D] hover:bg-[#8fb04d] text-gray-600 font-medium py-2 px-2 rounded-lg text-center transition-colors mt-2 mb-4"
                          >
                            Request Appoinment
                          </Link>
                          
                          <h3 className="text-lg font-bold text-white mb-2 text-center">Call Us Now</h3>
                          <p className="text-lg font-bold text-white text-center">+(00) 123 5467</p>
                        </div>

                        {/* Services List */}
                        <div className="p-4">
                          <h4 className="text-2xl font-bold text-black mb-4">Services</h4>
                          <ul className="space-y-0">
                            {category.services.map((s, serviceIdx) => (
                              <li key={s.id}>
                                <Link 
                                  href={s.href} 
                                  className="block py-3 text-black hover:text-primary transition-colors"
                                >
                                  {s.title}
                                </Link>
                                {serviceIdx < category.services.length - 1 && (
                                  <div className="border-t border-gray-300" />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Sidebar */}
                <div className="lg:hidden !mb-8">
                  {/* Outer Gray Container */}
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    {/* Call-to-Action Section */}
                    <div className="bg-[#2d7a9e] rounded-t-lg p-6">
                      <h3 className="text-2xl font-bold text-white mb-4">Schedule Today</h3>
                      
                      {/* Request Appointment Button */}
                      <Link
                        href="/book-appointment"
                        className="block w-full bg-[#A1C65D] hover:bg-[#8fb04d] text-gray-600 font-medium py-3 px-4 rounded-lg text-center transition-colors mb-4"
                      >
                        Request Appoinment
                      </Link>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">Call Us Now</h3>
                      <p className="text-3xl font-bold text-white">+(00) 123 5467</p>
                    </div>

                    {/* Services List */}
                    <div className="p-6">
                      <h4 className="text-2xl font-bold text-black mb-4">Services</h4>
                      <ul className="space-y-0">
                        {category.services.map((s, serviceIdx) => (
                          <li key={s.id}>
                            <Link 
                              href={s.href} 
                              className="block py-3 text-black hover:text-primary transition-colors"
                            >
                              {s.title}
                            </Link>
                            {serviceIdx < category.services.length - 1 && (
                              <div className="border-t border-gray-300" />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {idx < category.services.length - 1 && (
                  <div className="border-t border-gray-300 mt-12" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-linear-to-r from-primary to-accent-1 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white !mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 !mb-8 max-w-xl mx-auto">
            Schedule your appointment today and take the first step towards better oral health.
          </p>
          <Button href="/book-appointment" variant="secondary" size="lg">
            Book Appointment
          </Button>
        </div>
      </section> */}
    </>
  );
}
