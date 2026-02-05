'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            question: "How secure is our client data?",
            answer: "We maintain bank-level encryption, SOC 2 compliance, and attorney-client privilege protocols. All team members sign NDAs and receive HIPAA training. We've processed thousands of cases with zero data breaches in 3 years."
        },
        {
            question: "How does attorney oversight work?",
            answer: "Every team includes licensed attorneys who review critical documents, approve demand letters, and ensure compliance with local rules and ethical requirements. You maintain ultimate control and responsibility."
        },
        {
            question: "What case management systems do you integrate with?",
            answer: "We work with all major platforms including Filevine, Clio, MyCase, CASEpeer, Litify, and more. We can also adapt to custom or proprietary systems your firm uses."
        },
        {
            question: "What if we need to scale up or down?",
            answer: "Our month-to-month model allows complete flexibility. Add resources during busy seasons, reduce during slow periods. No penalties, no long-term commitments. Most adjustments can be made with 30 days notice."
        },
        {
            question: "Do you work in our timezone?",
            answer: "Yes. We staff teams to match your business hours across all US time zones. Need extended or after-hours coverage? We can arrange that too."
        },
        {
            question: "What types of PI cases do you handle?",
            answer: "Auto accidents, slip and fall, workers' compensation, medical malpractice, product liability, wrongful death, and more. Our teams have experience across all major PI practice areas."
        }
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Questions</div>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>
                <div className="faq-list">
                    {faqItems.map((item, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                {item.question}
                                <span className="faq-icon">+</span>
                            </button>
                            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
