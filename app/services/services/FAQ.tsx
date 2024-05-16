// components/FAQ.tsx
import React, { useState } from 'react';
import FadeUpOnScroll from "@/components/FadeUpOnScroll";


interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <FadeUpOnScroll>
        
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && <div className="p-4 text-gray-600">{answer}</div>}
      </FadeUpOnScroll>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: 'Apa saja dokumen yang perlu disiapkan untuk membuka rekening blu?',
      answer: 'Gak ribet, kamu cuma perlu siapin:\n\n- E-KTP\n- NPWP (opsional)\n\nPastikan kamu ada di ruangan terang karena tim haloblu akan melakukan video call untuk verifikasi datamu, ya.',
    },
    {
      question: 'Apakah saya bisa membuatkan rekening blu untuk orang lain?',
      answer: 'Sayangnya, tidak. Kamu tidak bisa membuat akun perwakilan untuk anak atau orang lain yang masih belum memiliki E-KTP. Tiap Nomor Induk Kependudukan (NIK) hanya bisa digunakan untuk satu akun.',
    },
    {
      question: 'Saya belum punya NPWP, apakah bisa punya rekening blu?',
      answer: 'Bisa. Kamu akan diminta untuk upload NPWP jika nominal portofolio yang dimiliki sudah mencapai Rp 7,5 juta.',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Hal yang paling sering ditanyakan?</h2>
      <div>
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
