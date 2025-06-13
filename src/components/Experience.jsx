import { useInView } from 'react-intersection-observer';


export default function Experience() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="experience" className={`experience fade-in-up ${inView ? 'visible' : ''}`} ref={ref}>
            <h2>Experience</h2>
            <div className="experience-text">
                <h2>Front-End Developer</h2>
                <p>Worked closely with cross-functional teams,
                    including designers, marketers,</p> <p>and backend developers,
                        to bring projects from concept to completion.</p>
                <p>Championed agile methodologies, ensuring seamless
                workflows and faster project turnaround.</p>

                <h2>Web and Graphic Designer</h2>
                <p>Created websites with HTML and CSS/SASS.</p>
                <p>Marketing appearances, banners, flyers.</p>
                <p>Supported the company`s social media channels and
                I made photography content.</p>
            </div>
        </section>
    );
}