"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

interface ServiceFaqAccordionProps {
  faqs: Faq[];
}

export default function ServiceFaqAccordion({ faqs }: ServiceFaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-primary pr-4">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                openFaq === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openFaq === index && (
            <div className="px-4 pb-4 text-secondary">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
