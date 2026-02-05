'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero">
            {/* Video Background */}
            <div className="hero-video-container">
                <video
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src="https://cdn.prod.website-files.com/6881e4f88e930dcc88c64245%2F688266058d7d854d11dc1f69_legal-test-video-transcode.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="hero-video-overlay"></div>
            </div>

            <div className="hero-content">
                <h1>
                    Scale Your Personal Injury Practice
                    <span>Without Hiring Headaches</span>
                </h1>
                <p className="hero-subheading">
                    Dedicated case management teams + AI-powered workflows = 40% faster case resolution. Handle more cases, close faster, and grow without the overhead.
                </p>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">3 Years</span>
                        <span className="stat-label">Serving PI Firms</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">2,000+</span>
                        <span className="stat-label">Cases Processed Annually</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">14 Days</span>
                        <span className="stat-label">Onboarding Time</span>
                    </div>
                </div>
                <div className="hero-cta">
                    <Link href="#calculator" className="btn-primary">Get Your Custom Staffing Plan</Link>
                    <Link href="#how-it-works" className="btn-secondary">See How It Works</Link>
                </div>
            </div>
        </section>
    );
}
