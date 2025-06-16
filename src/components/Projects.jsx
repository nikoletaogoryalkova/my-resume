import { Link } from 'react-router-dom';

export default function Projects() {

    const projects = [
        {
            id: 1,
            title: 'PROJECT 01',
            image: '/Project1.png',
        },
        {
            id: 2,
            title: 'PROJECT 02',
            image: '/Project2.jpg',
        },
        {
            id: 3,
            title: 'PROJECT 03',
            image: '/Project3.jpg',
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-heading">
                <h2>Projects</h2>
            </div>
            <div className="projects-grid">
                {projects.map(project => (
                    <Link key={project.id} to={`projects/${project.id}`} className="projects-item">
                        <img src={project.image} alt={project.title} />
                        <div className="projects-label">{project.title}</div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
