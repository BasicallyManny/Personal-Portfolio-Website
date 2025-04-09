import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    // You'll need to replace this with your actual project data
    const projects = [
        {
            id: 1,
            title: "Kami",
            description: "Kami is a powerful discord bot designed to enhance your Minecraft experience. Kami combines robust database management and intelligent responses.",
            tags: ["Python", "Discord.py", "FastAPI", "MongoDB"],
            notes: ["Integrated LangChain and OpenAI, providing AI-generated Minecraft insights", "Stores and retrieves Minecraft Coordinates within MongoDB to help you navigate the world", "Interactive and user-friendly Discord commands for a seamless Minecraft experience."],
            githubLink: "https://github.com/BasicallyManny/Kami-2.0",
            liveLink: "https://kami-site-one.vercel.app/",
            image: '../../../assets/KamiSite.webp'
        },
        {
            id: 2,
            title: "Algorithm Visualizer",
            description: "An interactive sorting algorithm visualizer built with React, TypeScript, and Framer Motion, featuring smooth animations and real-time visual feedback to help users explore and understand different sorting algorithms.",
            tags: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
            notes: ["Users can choose from Quicksort, Merge Sort, and Insertion Sort, adjust array sizes, and control the speed of the visualization.", "Each algorithm comes with a clear explanation and code examples in multiple programming languages.", "Color-coded, real-time animations highlight the sorting process step by step for better understanding."],
            githubLink: "https://github.com/BasicallyManny/Algorithm-Visualizer",
            liveLink: "https://algorithmsvisualizer.vercel.app/",
            image: '../../../assets/algovisualizer.webp' 
        },
    ];

    return (
        <section id="projects" className="py-20 bg-transparent min-h-screen">
            <div className="container border mx-auto px-4 sm:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-16 tracking-tight">
                    My Projects
                </h1>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col border-amber-600 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                        >
                            {/* Project Image */}
                            <div className="w-full md:w-3/5 h-72 sm:h-80 md:h-96 bg-gray-800 rounded-lg overflow-hidden relative group">
                                <div className="absolute inset-0 bg-opacity-20 transition-opacity opacity-0 group-hover:opacity-100"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full position-absolute left-0 top-0 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 2xl:object-fill"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="w-full md:w-2/5 space-y-4">
                                <h3 className="text-4xl font-bold text-white">{project.title}</h3>

                                <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                                    <p className="text-gray-300">{project.description}</p>
                                    <ul className="mt-4 space-y-2">
                                        {project.notes.map((note, noteIndex) => (
                                            <li key={noteIndex} className="flex items-start">
                                                <span className="text-white mr-2 mt-1">•</span>
                                                <span className="text-gray-300">{note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors hover:scale-110"
                                        aria-label="GitHub Repository"
                                    >
                                        <FiGithub size={22} color='white' />
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors hover:scale-110"
                                        aria-label="Live Demo"
                                    >
                                        <FiExternalLink size={22} color='white'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;