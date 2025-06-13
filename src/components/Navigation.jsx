import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';


export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView();
        }
        setIsMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };


    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300); // Show after scrolling 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <nav className="nav">
                <button className="burger" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`nav-buttons ${isMenuOpen ? "open" : ''}`}>
                    <button onClick={() => scrollToSection('about')}>
                        About
                    </button>
                    <button onClick={() => scrollToSection('projects')}>
                        Projects
                    </button>
                    <button onClick={() => scrollToSection('experience')}>
                        Experience
                    </button>
                    <button onClick={() => scrollToSection('education')}>
                        Education
                    </button>
                    <button onClick={() => scrollToSection('contact')}>
                        Contact
                    </button>
                </div>
            </nav>
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </>

    )
}
