import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#experience">Experience</Link>
            <Link to='experience'>Experience</Link>
            <Link to='education'>Education</Link>
            <Link to='contact'>Contact</Link>
        </nav>
    );
}
