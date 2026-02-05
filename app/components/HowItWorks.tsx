'use client';

export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Assessment Call",
            description: "15-minute discovery to understand your current volume, pain points, and goals."
        },
        {
            number: "2",
            title: "Custom Team Allocation",
            description: "We recommend the right team size (typically 2-5 specialists) based on your caseload."
        },
        {
            number: "3",
            title: "14-Day Onboarding",
            description: "Integration with your systems, training on your processes, and attorney oversight setup."
        },
        {
            number: "4",
            title: "Scale As Needed",
            description: "Add or reduce resources month-to-month. No long-term contracts, no penalties."
        }
    ];

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Process</div>
                    <h2 className="section-title">Get Started in 4 Simple Steps</h2>
                </div>
                <div className="steps">
                    {steps.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
