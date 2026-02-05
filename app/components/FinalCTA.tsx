'use client';

import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section className="final-cta">
            <div className="container">
                <h2>Ready to 2x Your Case Capacity?</h2>
                <p>Book a 15-minute discovery call to see how LexGo can transform your practice.</p>
                <div className="final-cta-button">
                    <Link href="mailto:contact@lexgosolutions.com" className="btn-primary">Schedule Discovery Call</Link>
                </div>
            </div>
        </section>
    );
}
