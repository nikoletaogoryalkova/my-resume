import { GraduationCap, BadgeCheck } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Education() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="education" className={`education fade-in-up ${inView ? 'visible' : ''}`} ref={ref}>
            <h2>Education</h2>
            <div className="education-text">
                <div className="education-item">
                    <GraduationCap size={30} />
                    <p>Bachelor`s Degree in Automatics, IT and Control of Systems</p>
                </div>
                <div className="education-item">
                    <GraduationCap size={30} />
                    <p>Master`s Degree in Web Design</p>
                </div>
                <div className="education-item">
                    <BadgeCheck size={30} />
                    <p>Certifications in Front-End Technologies</p>
                </div>
            </div>
        </section>
    );
}
