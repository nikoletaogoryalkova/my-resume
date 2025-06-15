import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

export default function Home() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 300);
        return () => clearTimeout(timeout);
    }, []);

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const section = document.querySelector(location.hash);
            if (section) {
                section.scrollIntoView();
            }
        }
    }, [location]);



    return (
        <>
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
                    {/* <button
                        className="read-more-button"
                        onClick={() => {
                            const section = document.getElementById('about');
                            section?.scrollIntoView();
                        }}
                    >
                        Read More
                    </button> */}
                </div>
                <img className="profile-photo" src="/NikoletaOgoryalkova.jpeg" alt="Profile-photo" />
            </div>
  
            <About />
            <Projects />
            <Experience />
            <Education />
            <Contact />
        </>
    );
}