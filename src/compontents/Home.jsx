export default function Home() {
    return (
        <>
            <section className="header">
                <p>About</p>
                <p>Projects</p>
                <p>Experience</p>
                <p>Education</p>
                <p>Contact</p>
                <button className="contact-button">Contact Me</button>
            </section>
            <div className="home">
                <img src="" alt="photo" />
                <div className="home-text">
                    <img src="" alt="vector-pink" />
                    <h1>Nikoleta Ogoryalkova</h1>
                    <p>Welcome to my online CV! I specialize in web
                        development and have a passion for creating unique
                        and innovative digital experiences.
                        Let`s work together to bring your vision to life.</p>
                    <button className="read-more-button">Read More</button>
                </div>
            </div>
        </>
    );
}