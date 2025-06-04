// import { useState, useEffect } from 'react';

export default function Experience() {


    // const [animate, setAnimate] = useState(false);

    // useEffect(() => {
    //     // Optional delay (like setTimeout)
    //     const timeout = setTimeout(() => {
    //         setAnimate(true);
    //     }, 300); // delay in milliseconds
    //     return () => clearTimeout(timeout);
    // }, []);

    return (
        <section className="experience">
            <h2>Experience</h2>

            {/* <img className={`vector-pink ${animate ? 'animate-in' : ''}`}
                src="/VectorPink.png"
                alt="vector-pink"
            /> */}
            <div className="experience-text">
                <h2>Front-End Developer</h2>
                <p>Worked closely with cross-functional teams, </p>
                <p>including designers, marketers, and backend developers,</p>
                <p>to bring projects from concept to completion.</p>
                <p>Championed agile methodologies, ensuring seamless</p>
                <p>workflows and faster project turnaround.</p>

                <h2>Web and Graphic Designer</h2>
                <p>Created websites with HTML and CSS/SASS.</p>
                <p>Marketing appearances, banners, flyers.</p>
                <p>Supported the company`s social media channels and</p>
                <p>I made photography content.</p>
            </div>
        </section>
    );
}