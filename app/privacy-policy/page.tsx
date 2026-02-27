'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
    return (
        <>
            <Navigation />
            <main>
                {/* Policy Hero Section */}
                <section className="policy-hero">
                    <div className="container">
                        <span className="policy-last-updated">Last Updated: February 27, 2026</span>
                        <h1>Privacy Policy</h1>
                        <p className="hero-subheading" style={{ margin: '0 auto', opacity: 0.8 }}>
                            How LexGo Solutions protects your law firm&apos;s data and maintains the highest standards of confidentiality.
                        </p>
                    </div>
                </section>

                {/* Policy Content Body */}
                <section className="policy-body">
                    <div className="container" style={{ maxWidth: '900px' }}>
                        <Link href="/" className="back-to-site">
                            <ArrowLeft size={20} />
                            Back to Home
                        </Link>

                        <div className="policy-section">
                            <div className="section-label">Commitment</div>
                            <h2>Data Integrity & Security</h2>
                            <p>At LexGo Solutions, we take the privacy and security of your law firm&apos;s data and your clients&apos; information with the utmost seriousness. Our platform and workflows are built to exceed industry standards for legal service providers.</p>
                        </div>

                        <div className="policy-section">
                            <div className="section-label">Collection</div>
                            <h2>1. Information We Collect</h2>
                            <p>We collect information that you provide directly to us when you inquire about our services or use our platform, including:</p>
                            <ul>
                                <li><strong>Contact Information:</strong> Name, professional email (hello@lexgosolutions.com), and phone number.</li>
                                <li><strong>Firm Details:</strong> Law firm name, current case volume, and primary practice areas.</li>
                                <li><strong>Inquiry Data:</strong> Information shared via our ROI Calculator or project assessment forms.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <div className="section-label">Usage</div>
                            <h2>2. How We Use Your Information</h2>
                            <p>We use the collected information exclusively to:</p>
                            <ul>
                                <li>Provide and optimize our dedicated case management services.</li>
                                <li>Maintain communication regarding service updates or operational inquiries.</li>
                                <li>Refine our AI-powered workflows to better serve your specific practice area.</li>
                                <li>Ensure total compliance with all legal and ethical obligations.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <div className="section-label">Compliance</div>
                            <h2>3. Security & Legal Protocols</h2>
                            <p>LexGo Solutions is committed to maintaining the highest standards of data security, specifically for the Personal Injury sector:</p>
                            <ul>
                                <li><strong>HIPAA Compliance:</strong> Rigorous protocols for the secure handling and storage of protected health information (PHI).</li>
                                <li><strong>Confidentiality:</strong> Every team member operates under strict, legally binding Non-Disclosure Agreements (NDAs).</li>
                                <li><strong>Privilege Protection:</strong> Our processes are designed to preserve and protect the attorney-client privilege of your firm at all times.</li>
                                <li><strong>Bank-Level Encryption:</strong> All sensitive data is encrypted at rest and during transit.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <div className="section-label">Disclosure</div>
                            <h2>4. Third-Party Data Policy</h2>
                            <p>We hold a strict policy against the sale of your data. We only share information with vetted third-party infrastructure providers (such as secure hosting services) as strictly necessary to deliver our services, and only with partners who meet our security benchmarks.</p>
                        </div>

                        <div className="policy-section">
                            <div className="section-label">Inquiries</div>
                            <h2>5. Contact Our Data Team</h2>
                            <p>If you have questions regarding this policy or our internal data security measures, please reach out to our team:</p>
                            <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--navy)', marginTop: '1rem', borderBottom: '2px solid var(--gold)', display: 'inline-block' }}>
                                hello@lexgosolutions.com
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
