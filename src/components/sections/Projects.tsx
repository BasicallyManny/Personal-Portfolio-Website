import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaTools } from "react-icons/fa";
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Gideon",
            description: "Full-stack job application tracker to manage and monitor applications with ease. Includes analytics for insights into preferences and success rates, helping you stay organized and boost job search efficiency.",
            tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "FastAPI", "MongoDB"],
            notes: ["Secure authentication using JWT", "Spreadsheet-style interface for tracking job applications", "Insightful analytics to understand your job search patterns", "Integrated calendar to keep track of important events"],
            githubLink: "https://github.com/BasicallyManny/Gideon/",
            liveLink: "https://gideon-nine.vercel.app/",
            image: '../../../assets/gideon.webp',
            wip: true 
        },
        {
            id: 2,
            title: "Kami",
            description: "Kami is a powerful discord bot designed to enhance your Minecraft experience. Kami combines robust database management and intelligent responses.",
            tags: ["Python", "Discord.py", "FastAPI", "MongoDB"],
            notes: ["Integrated LangChain and OpenAI, providing AI-generated Minecraft insights", "Stores and retrieves Minecraft Coordinates within MongoDB to help you navigate the world", "Interactive and user-friendly Discord commands for a seamless Minecraft experience."],
            githubLink: "https://github.com/BasicallyManny/Kami-2.0",
            liveLink: "https://kami-site-one.vercel.app/",
            image: '../../../assets/KamiSite.webp',
            wip: false
        },
        {
            id: 3,
            title: "Algorithm Visualizer",
            description: "An interactive sorting algorithm visualizer built with React, TypeScript, and Framer Motion, featuring smooth animations and real-time visual feedback to help users explore and understand different sorting algorithms.",
            tags: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
            notes: ["Users can choose from Quicksort, Merge Sort, and Insertion Sort, adjust array sizes, and control the speed of the visualization.", "Each algorithm comes with a clear explanation and code examples in multiple programming languages.", "Color-coded, real-time animations highlight the sorting process step by step for better understanding."],
            githubLink: "https://github.com/BasicallyManny/Algorithm-Visualizer",
            liveLink: "https://algorithmsvisualizer.vercel.app/",
            image: '../../../assets/algovisualizer.webp',
            wip: false
        },
    ];

    return (
        <section id="projects" className="py-20 bg-transparent min-h-screen">
            <motion.div 
                className="container border mx-auto px-4 sm:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-16 tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Projects
                </motion.h1>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`flex flex-col border-amber-600 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* Project Image */}
                            <div className="w-full md:w-3/5 h-72 sm:h-80 md:h-96 bg-gray-800 rounded-lg overflow-hidden relative group">
                                <div className="absolute inset-0 bg-opacity-20 transition-opacity opacity-0 group-hover:opacity-100"></div>
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full position-absolute left-0 top-0 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 2xl:object-fill"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.4 }}
                                />
                                
                                {/* WIP Banner - show only if project.wip is true */}
                                {project.wip && (
                                    <motion.div 
                                        className="flex items-center gap-2 absolute top-10 right-7 bg-amber-600 text-white px-4 py-1.5 text-sm font-medium rounded-md shadow-lg transform rotate-2"
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.4 }}
                                    >
                                        <FaTools className="text-white" />
                                        <span>In Active Development</span>
                                    </motion.div>
                                )}
                            </div>

                            {/* Project Info */}
                            <div className="w-full md:w-2/5 space-y-4">
                                <div className="flex items-center">
                                    <h3 className="text-4xl font-bold text-white">{project.title}</h3>
                                    {project.wip && (
                                        <motion.span 
                                            className="ml-4 bg-amber-600 text-white text-sm px-2 py-1 rounded-full"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.4, duration: 0.3 }}
                                        >
                                            WIP
                                        </motion.span>
                                    )}
                                </div>

                                <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                                    <p className="text-gray-300">{project.description}</p>
                                    {project.wip && (
                                        <p className="text-amber-400 mt-2 italic">
                                            Note: This project is live but some features are still under development.
                                        </p>
                                    )}
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
                                        <motion.span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-full"
                                            whileHover={{ backgroundColor: "#1e3a8a", color: "#ffffff" }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="GitHub Repository"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiGithub size={22} color='white' />
                                    </motion.a>
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="Live Demo"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiExternalLink size={22} color='white'/>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;