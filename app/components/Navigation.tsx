'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactPopup from './ContactPopup';

export default function Navigation() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Check initial scroll position
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
                <a href="/" className="logo">
                    LexGo<span>Solutions</span>
                </a>
                <button className="nav-cta" onClick={openPopup}>Contact Us</button>
            </nav>

            <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
        </>
    );
}
