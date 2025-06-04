// import { useState, useEffect } from 'react';

export default function About() {

   // const [animate, setAnimate] = useState(false);

   // useEffect(() => {
   //    // Optional delay (like setTimeout)
   //    const timeout = setTimeout(() => {
   //       setAnimate(true);
   //    }, 300); // delay in milliseconds
   //    return () => clearTimeout(timeout);
   // }, []);

   return (
      <section className="about">
         <h2>About</h2>
         {/* <img
               className={`vector-yellow ${animate ? 'animate-in' : ''}`}
               src="/VectorYellow.png"
               alt="vector-yellow" 
               /> */}

         <div className="about-text">
            <p>I`m <strong>Nikoleta Ogoryalkova</strong>, a front-end developer with 5 years of experience</p>
            <p>  building responsive and user-friendly websites.</p>
            <p>My expertise includes <strong>HTML, CSS, and preprocessors</strong> like Sass/Less. </p>
            <p>  Recently, I expanded my skills with JavaScript and started working with React to build</p>
            <p>   dynamic interfaces and single-page applications.</p>
            <p>I also use Photoshop, Figma for creating simple design elements when needed.</p>
            <p>  I enjoy turning ideas into clean, functional, and accessible websites that work on all devices.</p>
         </div>
      </section>
   );
}