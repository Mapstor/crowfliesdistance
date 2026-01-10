'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What does "as the crow flies" mean?',
    answer: '"As the crow flies" refers to the shortest distance between two points on Earth\'s surface, measured along a straight line. It\'s called this because crows are known to fly directly to their destination rather than following roads or paths.'
  },
  {
    question: 'How accurate is this calculator?',
    answer: 'Our calculator uses the Haversine formula to calculate distances on a spherical Earth, which is accurate to within 0.5% for most distances. The formula accounts for Earth\'s curvature, providing precise measurements for straight-line distances.'
  },
  {
    question: 'Why is straight-line distance different from driving?',
    answer: 'Straight-line distance is the shortest path between two points, while driving distance follows roads, highways, and terrain. Driving distances are typically 20-50% longer due to the need to follow established routes, avoid obstacles, and navigate around geographical features.'
  },
  {
    question: 'Can I measure distance between any two points?',
    answer: 'Yes! You can measure distances between cities using our search feature, click on any points on the map, use your GPS location, or enter specific addresses. The calculator works with any two locations on Earth.'
  },
  {
    question: 'What units are supported?',
    answer: 'We display distances in both miles and kilometers. The calculator automatically shows both units for every calculation, so you can use whichever measurement system you prefer.'
  },
  {
    question: 'How is the distance calculated?',
    answer: 'We use the Haversine formula, which calculates the great-circle distance between two points on a sphere given their longitudes and latitudes. This accounts for Earth\'s curvature and provides the shortest distance over the Earth\'s surface.'
  }
];

export default function FAQ({ items = defaultFAQs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left flex justify-between items-start gap-4 hover:text-blue-600 transition-colors"
              >
                <h3 className="font-medium text-gray-800">{item.question}</h3>
                <span className="text-gray-400 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}