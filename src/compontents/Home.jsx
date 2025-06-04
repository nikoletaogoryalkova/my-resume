import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Home() {
    const [animate, setAnimate] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        // Optional delay (like setTimeout)
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 300); // delay in milliseconds
        return () => clearTimeout(timeout);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300); // Show after scrolling 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <nav className="nav">
                <button onClick={() => scrollToSection('about')}>About</button>
                <button onClick={() => scrollToSection('projects')}>Projects</button>
                <button onClick={() => scrollToSection('experience')}>Experience</button>
                <button onClick={() => scrollToSection('education')}>Education</button>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
            </nav>
            <div className="home">
                <div className="home-text">
                    <img
                        className={`vector-pink ${animate ? 'animate-in' : ''}`}
                        src="/VectorPink.png"
                        alt="vector-pink" />

                    <h1>Nikoleta Ogoryalkova</h1>
                    <p>Welcome to my online CV! I specialize in web</p>
                    <p> development and have a passion for creating unique</p>
                    <p>  and innovative digital experiences.</p>
                    <p>  Let`s work together to bring your vision to life.</p>
                    <button
                        className="read-more-button"
                        onClick={() => scrollToSection('about')}>
                        Read More
                    </button>
                </div>
                <img className="profile-photo" src="/NikoletaOgoryalkova.jpeg" alt="Profile-photo" />
            </div>

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
    );
}