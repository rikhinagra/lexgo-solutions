'use client';

import Link from 'next/link';
import { Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-info">
                        <a href="/" className="logo footer-logo">
                            LexGo<span>Solutions</span>
                        </a>
                        <p className="footer-tagline">
                            Scaling Personal Injury law firms with dedicated teams and AI-powered workflows. Handle more cases, close faster.
                        </p>
                    </div>
                    
                    {/* Navigation Section */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <div className="footer-links">
                            <Link href="/#how-it-works">How It Works</Link>
                            <Link href="/#calculator">ROI Calculator</Link>
                            <Link href="/#pricing">Pricing</Link>
                            <Link href="/#faq">FAQ</Link>
                        </div>
                    </div>
                    
                    {/* Contact Section */}
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <div className="footer-contact-info">
                            <a href="mailto:hello@lexgosolutions.com" className="footer-email">
                                <Mail size={18} />
                                hello@lexgosolutions.com
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Clean Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-bottom-flex">
                        <p>&copy; {new Date().getFullYear()} LexGo Solutions. All rights reserved.</p>
                        <div className="footer-legal-links">
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <span className="footer-divider">|</span>
                            <span>Built for Personal Injury Law Firms</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
