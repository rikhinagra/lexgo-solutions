'use client';

import Link from 'next/link';

export default function Pricing() {
    const pricingPlans = [
        {
            name: "Starter",
            price: "$2,500",
            featured: false,
            features: [
                "1 Dedicated Specialist",
                "20-30 cases/month capacity",
                "AI-powered tools included",
                "Attorney oversight",
                "14-day onboarding",
                "No long-term contract"
            ]
        },
        {
            name: "Growth",
            price: "$7,000",
            featured: true,
            features: [
                "3 Dedicated Specialists",
                "60-90 cases/month capacity",
                "AI-powered tools included",
                "Attorney oversight",
                "Priority onboarding (7 days)",
                "Dedicated account manager",
                "Custom workflow integration"
            ]
        },
        {
            name: "Scale",
            price: "$11,500",
            featured: false,
            features: [
                "5+ Dedicated Specialists",
                "100+ cases/month capacity",
                "AI-powered tools included",
                "Senior attorney oversight",
                "Express onboarding (5 days)",
                "Dedicated account manager",
                "Custom AI model training",
                "White-glove service"
            ]
        }
    ];

    return (
        <section className="pricing">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Transparent Pricing</div>
                    <h2 className="section-title">Choose Your Plan</h2>
                    <p className="section-subtitle">Flexible, scalable pricing with no long-term contracts. Add or reduce resources as your needs change.</p>
                </div>
                <div className="pricing-cards">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                            {plan.featured && <div className="featured-badge">Most Popular</div>}
                            <h3>{plan.name}</h3>
                            <div className="price">{plan.price}<span>/month</span></div>
                            <ul className="pricing-features">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>{feature}</li>
                                ))}
                            </ul>
                            <Link href="#calculator" className="btn-primary">Get Started</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
