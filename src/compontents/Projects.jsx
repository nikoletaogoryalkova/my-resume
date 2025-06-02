export default function Projects() {

    const projects = [
        {
            id: 1,
            title: 'PROJECT 01',
            image: '/Project1.png', // Replace with actual image path
        },
        {
            id: 2,
            title: 'PROJECT 02',
            image: 'Project2.jpg',
        },
        {
            id: 3,
            title: 'PROJECT 03',
            image: 'Project1.png',
        },
    ];



    return (
        <section className="projects">
            <div className="projects-heading">
                <h2>Projects</h2>
                {/* <p>My latest work. <a href="#">See More </a></p> */}
            </div>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="projects-item">
                        <img src={project.image} alt={project.title} />
                        <div className="projects-label">{project.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};


{/* <img src="/Project1.png" alt="Project1" />
<img src="/Project2.jpg" alt="Project1" /> */}