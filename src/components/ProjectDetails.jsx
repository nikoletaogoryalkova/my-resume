import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';


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
        images: ['/Project2-1.jpg', '/Project2-2.jpg', '/Project2-3.jpg', '/Project2-4.jpg'],
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

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    if (!project) {
        return (
            <>
                <p>Project not found.</p>
                <Link to="/">Back to home</Link>
            </>
        );
    }

    const handleClick = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((currentIndex + 1) % project.images.length);
    };
    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((currentIndex - 1 + project.images.length) % project.images.length);
    };

    const handleTouchStart = (e) => {
        e.stopPropagation();
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        e.stopPropagation();
        setTouchEnd(e.changedTouches[0].clientX);
        if (touchStart - touchEnd > 50) { // swipe left
            handleNext(e);
        }
        if (touchEnd - touchStart > 50) { // swipe right
            handlePrev(e);
        }
    };

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
                            onClick={() => handleClick(index)}
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
                {isOpen && (
                    <div className="modal" onClick={handleClose}>
                        <span
                            className="close"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClose();
                            }}>✕</span>
                        <span
                            className="prev"
                            onClick={handlePrev}
                        >
                            ❮
                        </span>
                        <img
                            src={project.images[currentIndex]}
                            alt="Fullscreen view"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        />
                        <span className="next" onClick={handleNext}>
                            ❯
                        </span>
                    </div>
                )}

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