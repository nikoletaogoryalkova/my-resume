import { Link, useParams } from 'react-router-dom';


const projectInfo = {
    1: {
        title: 'PROJECT 01',
        images: ['/Project1.png', '/Project1-2.svg'],
        description: 'Built a sleek, responsive website for Paradise View, a beautiful villa complex in Sarnitsa, Bulgaria. Showcased stunning panoramic views and amenities with smooth animations and clear navigation. Focused on creating a seamless experience for visitors on any device, combining clean design with front-end best practices.',
        links: [
            { label: 'Live', url: 'https://paradiseview.bg/' },
            { label: 'GitHub', url: 'https://github.com/nikoletaogoryalkova/ParadiseView' },
        ],
    },
    2: {
        title: 'PROJECT 02',
        images: ['/Project2.jpg', '/Project2-2.png'],
        description: 'Banners, flyers',
        links: [
            // { label: 'GitHub', url: 'https://github.com/project2' },
        ],
    },
    3: {
        title: 'PROJECT 03',
        images: ['/Project1.png'],
        description: 'Coming soon...',
        links: [],
    },
};


export default function ProjectDetails() {
    const { id } = useParams();
    const projectId = parseInt(id, 10);
    const project = projectInfo[projectId];
    const nextId = projectId + 1 <= Object.keys(projectInfo).length ? projectId + 1 : 1; // Loop back to first if it's last

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
                        <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} />
                    ))}
                </div>
                <div className="project-links">
                    {project.links.map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label}
                        </a>
                    ))}
                </div>

                <Link to={`/projects/${nextId}`}>
                    Next Project &#8594;
                </Link>
            </section>
        </>
    );
}