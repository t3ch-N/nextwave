import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Nextwave PR offer?",
      answer: "We offer comprehensive PR services including media relations, corporate communications, crisis management, event management, digital PR, and strategic communications consulting."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing is customized based on your specific needs and project scope. Contact us for a free consultation and tailored quote."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! While based in Nairobi, we work with clients across Kenya, East Africa, and internationally."
    },
    {
      question: "How quickly can you respond to a crisis?",
      answer: "We offer 24/7 crisis management support and can mobilize our team within hours of your call."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have experience across multiple sectors including government, NGOs, corporate, technology, healthcare, and infrastructure development."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us via phone, email, or WhatsApp. We'll schedule a free consultation to discuss your needs and how we can help."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition"
              >
                <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                <span className="text-blue-600 flex-shrink-0 ml-4">
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
