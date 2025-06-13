import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // const scrollToSection = (id) => {
    //     const section = document.getElementById(id);
    //     if (section) {
    //         section.scrollIntoView();
    //     }
    //     setIsMenuOpen(false);
    // };

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
                <div className='nav-wrapper'>
                    <button className="burger" onClick={toggleMenu}>
                        ☰
                    </button>
                    <div className={`logo-wrapper ${isMenuOpen ? 'hidden' : ''}`}>
                        <Link to="/">
                            <img
                                className="logo"
                                src="/Logo.svg"
                                alt="logo"
                            />
                        </Link>
                    </div>
                </div>

                <div className={`nav-buttons ${isMenuOpen ? "open" : ''}`}>
                    <Link to="/#about" className="nav-link">
                        About
                    </Link>
                    <Link to="/#projects" className="nav-link">
                        Projects
                    </Link>
                    <Link to="/#experience" className="nav-link">
                        Experience
                    </Link>
                    <Link to="/#education" className="nav-link">
                        Education
                    </Link>
                    <Link to="/#contact" className="nav-link">
                        Contact
                    </Link>
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
