import { Link, useParams } from 'react-router-dom';


const projectInfo = {
    1: {
        title: 'PROJECT 01',
        images: ['/Project1-1.jpg', '/Project1-2.jpg', '/Project1-3.jpg', '/Project1-4.jpg'],
        description: 'Built a sleek, responsive website for Paradise View, a beautiful villa complex in Sarnitsa, Bulgaria. Showcased stunning panoramic views and amenities with smooth animations and clear navigation. Focused on creating a seamless experience for visitors on any device, combining clean design with front-end best practices.',
        links: [
            { label: 'Live', url: 'https://paradiseview.bg/' },
            { label: 'GitHub', url: 'https://github.com/nikoletaogoryalkova/ParadiseView' },
        ],
    },
    2: {
        title: 'PROJECT 02',
        images: ['/Project2-1.jpg', '/Project2-2.jpg', '/Project2-3.svg', '/Project2-4.svg'],
        description: 'A collection of creative projects that bring ideas to life — from posters and menus for restaurants and events to website designs. Each piece is crafted to communicate a message, reflect a unique style, and connect with its intended audience.',
        links: [
             { label: 'Live', url: 'https://www.behance.net/nikoletaogoryalkova' },
        ],
    },
    3: {
        title: 'PROJECT 03',
        images: ['/Project3.jpg'],
        description: 'Coming soon...',
        links: [],
    },
};


export default function ProjectDetails() {
    const { id } = useParams();
    const projectId = parseInt(id, 10);
    const project = projectInfo[projectId];
    const nextId = projectId + 1 <= Object.keys(projectInfo).length ? projectId + 1 : 1; // Loop back to first if it's last
    const prevId = projectId - 1 >= 1 ? projectId - 1 : Object.keys(projectInfo).length;


    if (!project) {
        return (
            <>
                <p>Project not found.</p>
                <Link to="/">Back to home</Link>
            </>
        );
    }
    return (
        <>
            <section className='projects-details'>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="project-images">
                    {project.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${project.title} screenshot ${index + 1}`}
                        />
                    ))}
                </div>
                <div className="project-links">
                    {project.links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="project-nav">
                    <Link to={`/projects/${prevId}`}>
                        &#8592; Prev
                    </Link>
                    <Link to={`/projects/${nextId}`}>
                        Next  &#8594;
                    </Link>
                </div>
            </section>
        </>
    );
}