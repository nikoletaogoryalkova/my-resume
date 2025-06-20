import { useInView } from 'react-intersection-observer';

export default function About() {
   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });


   return (
      <section id="about" className={`about fade-in-up ${inView ? 'visible' : ''}`} ref={ref}>
         <h2>About</h2>

         <div className="about-text">
            <p>I`m <strong>Nikoleta Ogoryalkova</strong>, a front-end developer with 5 years of experience</p>
            <p>building responsive and user-friendly websites. My expertise includes <strong>HTML, CSS,</strong></p>
            <p>and preprocessors like <strong>Sass/Less.</strong> Recently, I expanded my skills with <strong>JavaScript</strong></p>
            <p>and started working with <strong>React</strong> to build dynamic interfaces and single-page applications.</p>
            <p>I also use <strong>Photoshop, Figma</strong> for creating simple design elements when needed.</p>
            <p>I enjoy turning ideas into clean, functional, and accessible websites that work on all devices.</p>
         </div>
      </section>
   );
}