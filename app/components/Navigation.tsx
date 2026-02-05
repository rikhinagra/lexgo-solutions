'use client';

import { useState } from 'react';
import ContactPopup from './ContactPopup';

export default function Navigation() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <>
            <nav className="nav">
                <div className="logo">LexGo<span>Solutions</span></div>
                <button className="nav-cta" onClick={openPopup}>Contact Us</button>
            </nav>

            <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
        </>
    );
}
