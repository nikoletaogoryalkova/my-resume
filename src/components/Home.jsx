import { useState, useEffect } from 'react';

import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

export default function Home() {
    const [animate, setAnimate] = useState(false);
    // const [showScroll, setShowScroll] = useState(false);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 300);
        return () => clearTimeout(timeout);
    }, []);



    // useEffect(() => {
    //     const handleScroll = () => {
    //         setShowScroll(window.scrollY > 300); // Show after scrolling 300px
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);


    // const toggleMenu = () => {
    //     setIsMenuOpen(prev => !prev);
    // };

    return (
        <>
            {/* <nav className="nav">
                <button className="burger" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
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
            </nav> */}



            <div id="home" className="home">
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
                        onClick={() => {
                            const section = document.getElementById('about');
                            section?.scrollIntoView();
                        }}
                    >
                        Read More
                    </button>
                </div>
                <img className="profile-photo" src="/NikoletaOgoryalkova.jpeg" alt="Profile-photo" />
            </div>
  
            <About />
            <Projects />
            <Experience />
            <Education />
            <Contact />

            
            {/* {showScroll && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </button>
            )} */}
        </>
    );
}