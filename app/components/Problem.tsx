'use client';

export default function Problem() {
    const painPoints = [
        {
            title: "Hiring Takes Forever",
            description: "Finding, interviewing, and training case managers takes 3-6 months. Meanwhile, cases pile up and opportunities slip away."
        },
        {
            title: "Training Is Expensive",
            description: "Even after hiring, it takes months before new staff becomes productive. Every mistake costs you time and money."
        },
        {
            title: "Inconsistent Quality",
            description: "Without standardized processes, case quality varies wildly. Some files move fast, others sit for months."
        },
        {
            title: "Operational Overhead",
            description: "Managing HR, payroll, benefits, office space—it all adds up. You wanted to practice law, not run a staffing company."
        }
    ];

    return (
        <section className="problem">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">The Challenge</div>
                    <h2 className="section-title">Are You Turning Away Cases Because Your Team Is Maxed Out?</h2>
                    <p className="section-subtitle">Most growing PI firms face the same bottleneck: too many cases, not enough qualified staff.</p>
                </div>
                <div className="pain-points">
                    {painPoints.map((point, index) => (
                        <div key={index} className="pain-point">
                            <h3>{point.title}</h3>
                            <p>{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
