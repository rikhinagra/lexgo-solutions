'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Script from 'next/script';

interface ContactPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void;
            render: (container: string | HTMLElement, options: object) => number;
            reset: (widgetId?: number) => void;
            getResponse: (widgetId?: number) => string;
        };
        onRecaptchaLoad: () => void;
    }
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        workEmail: '',
        phoneNumber: '',
        companyName: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
    const [recaptchaVerified, setRecaptchaVerified] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset form when popup closes
            setTimeout(() => {
                setFormData({
                    fullName: '',
                    workEmail: '',
                    phoneNumber: '',
                    companyName: ''
                });
                setIsSubmitted(false);
                setRecaptchaVerified(false);
            }, 300);
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        // Define callback for reCAPTCHA
        window.onRecaptchaLoad = () => {
            setRecaptchaLoaded(true);
        };
    }, []);

    useEffect(() => {
        if (isOpen && recaptchaLoaded && window.grecaptcha) {
            setTimeout(() => {
                const recaptchaContainer = document.getElementById('recaptcha-container');
                const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
                if (recaptchaContainer && recaptchaContainer.childNodes.length === 0 && siteKey) {
                    window.grecaptcha.render('recaptcha-container', {
                        sitekey: siteKey,
                        callback: () => setRecaptchaVerified(true),
                        'expired-callback': () => setRecaptchaVerified(false)
                    });
                }
            }, 100);
        }
    }, [isOpen, recaptchaLoaded]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!recaptchaVerified) {
            alert('Please complete the reCAPTCHA verification.');
            return;
        }

        // For now, just show success message
        setIsSubmitted(true);
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <Script
                src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
                strategy="lazyOnload"
            />

            <div className="popup-overlay" onClick={handleOverlayClick}>
                <div className="popup-container">
                    <button className="popup-close" onClick={onClose} aria-label="Close popup">
                        <X size={24} />
                    </button>

                    {!isSubmitted ? (
                        <>
                            <div className="popup-header">
                                <h2>Contact Us</h2>
                                <p>Get in touch with our team to learn how we can help scale your practice.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="popup-form">
                                <div className="form-group">
                                    <label htmlFor="fullName">
                                        Full Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="John Doe"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="workEmail">
                                        Work Email <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="workEmail"
                                        name="workEmail"
                                        placeholder="john@company.com"
                                        value={formData.workEmail}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phoneNumber">
                                        Phone Number <span className="required">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="+1 (555) 123-4567"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="companyName">
                                        Company Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        placeholder="Your Company Inc."
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group recaptcha-group">
                                    <div id="recaptcha-container"></div>
                                </div>

                                <button type="submit" className="popup-submit-btn">
                                    Submit
                                </button>

                                <p className="privacy-text">
                                    We respect your privacy. Your information will only be used to contact you about our services.
                                </p>
                            </form>
                        </>
                    ) : (
                        <div className="popup-success">
                            <div className="success-icon">✓</div>
                            <h2>Thank You!</h2>
                            <p>Your message has been received. Our team will get back to you within 24 hours.</p>
                            <button className="popup-close-btn" onClick={onClose}>
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
