"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import type { FAQ } from "@/types/content";

interface FAQAccordionProps {
  faqs: FAQ[];
  allowMultiple?: boolean;
}

export default function FAQAccordion({ faqs, allowMultiple = false }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className={clsx(
          "w-full flex items-center justify-between gap-4 p-4 text-left",
          "hover:bg-gray-50 transition-colors",
          isOpen && "bg-primary/5"
        )}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-primary">{question}</span>
        <ChevronDown
          className={clsx(
            "w-5 h-5 flex-shrink-0 text-primary transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="p-4 pt-0 text-secondary">{answer}</div>
      </div>
    </div>
  );
}
