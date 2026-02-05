'use client';

import Image from 'next/image';

export default function Solution() {
    const solutions = [
        {
            image: "/images/solutions/client-intake.webp",
            title: "Client Intake",
        },
        {
            image: "/images/solutions/medical-records.webp",
            title: "Medical Records",
        },
        {
            image: "/images/solutions/demand-letters.webp",
            title: "Demand Letters",
        },
        {
            image: "/images/solutions/client-communication.webp",
            title: "Client Communication",
        },
        {
            image: "/images/solutions/settlement-coordination.webp",
            title: "Settlement Coordination",
        },
        {
            image: "/images/solutions/end-to-end-management.webp",
            title: "End-to-End Management",
        }
    ];

    return (
        <section className="solution">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">The Solution</div>
                    <h2 className="section-title">Your Dedicated Backend Team, Ready in 2 Weeks</h2>
                    <p className="section-subtitle">We handle everything from intake to settlement, supervised by experienced attorneys.</p>
                </div>
                <div className="solution-grid">
                    {solutions.map((solution, index) => (
                        <div key={index} className="solution-card solution-card-image">
                            <div className="solution-image-wrapper">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
