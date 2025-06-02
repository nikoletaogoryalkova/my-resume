import { useState, useEffect } from 'react';

export default function Home() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Optional delay (like setTimeout)
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 300); // delay in milliseconds
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <section className="header">
                <p>About</p>
                <p>Projects</p>
                <p>Experience</p>
                <p>Education</p>
                <p>Contact</p>
            </section>
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
                    <button className="read-more-button">Read More</button>
                </div>
                <img className="profile-photo" src="/NikoletaOgoryalkova.jpeg" alt="Profile-photo" />
            </div>
        </>
    );
}