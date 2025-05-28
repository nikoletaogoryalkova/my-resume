import './App.css'
import About from './compontents/About'
import Experience from './compontents/Experience'
import Education from './compontents/Education'
import Contact from './compontents/Contact'
import Projects from './compontents/Projects'
import Home from './compontents/Home'
import Footer from './compontents/Footer'

function App() {

    return (

        <div className='App'>
            <Home />
            <About />
            <Projects />
            <Experience />
            <Education />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
