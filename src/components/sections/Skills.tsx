import {
    SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb,SiGithub,
    SiReact, SiTailwindcss, SiFigma, SiFramer,
    SiPhp, SiBootstrap,
    SiDocker, SiVercel, SiGooglecloud, SiFastapi,
    SiLangchain, SiMysql, SiExpress, SiRailway, SiPython
} from 'react-icons/si';

import { motion } from 'framer-motion';


const Skills = () => {
    // Backend technologies with icons
    const backendTech = [
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500", bgColor: "bg-white" },
        { name: "Python", icon: <SiPython />, color: "text-yellow-500", bgColor: "bg-white" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500", bgColor: "bg-slate-900" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600", bgColor: "bg-white" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", bgColor: "bg-white" },
        { name: "GitHub", icon: <SiGithub />, color: "text-white", bgColor: "bg-black" },
        { name: "FastAPI", icon: <SiFastapi />, color: "text-blue-500" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-200" },
        { name: "LangChain", icon: <SiLangchain />, color: "text-green-500" },
    ];

    // Frontend technologies with icons
    const frontendTech = [
        { name: "React", icon: <SiReact />, color: "text-blue-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "Figma", icon: <SiFigma />, color: "text-purple-500" },
        { name: "Framer", icon: <SiFramer />, color: "text-blue-500" },
        { name: "PHP", icon: <SiPhp />, color: "text-purple-500" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    ];

    // Cloud & DevOps technologies with icons
    const cloudTech = [
        { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
        { name: "Vercel", icon: <SiVercel />, color: "text-gray-200" },
        { name: "Google Cloud", icon: <SiGooglecloud />, color: "text-blue-400" },
        { name: "Railway", icon: <SiRailway />, color: "text-purple-500" }
    ];

    // Custom skill icon component with enhanced hover tooltip
    const SkillIcon = ({ tech, theme }: { tech: { name: string; icon: React.ReactNode; color: string; bgColor?: string }, theme: 'blue' | 'purple' | 'cyan' }) => {
        // Theme colors for different categories
        const themeColors = {
            blue: {
                bg: "bg-blue-600",
                shadow: "shadow-blue-500/30",
                ringFocus: "ring-blue-400"
            },
            purple: {
                bg: "bg-purple-600",
                shadow: "shadow-purple-500/30",
                ringFocus: "ring-purple-400"
            },
            cyan: {
                bg: "bg-cyan-600",
                shadow: "shadow-cyan-500/30",
                ringFocus: "ring-cyan-400"
            }
        };

        const colors = themeColors[theme];

        return (
            <div className="relative group/icon">
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`${tech.bgColor || 'bg-zinc-800'} w-12 h-12 flex items-center justify-center rounded-lg shadow-md
                                group-hover/icon:scale-110 transition-all duration-300 cursor-pointer z-10
                                group-hover/icon:shadow-lg`}
                >
                    <span className={`text-2xl ${tech.color}`}>{tech.icon}</span>
                </motion.div>

                {/* Tooltip that appears on hover */}
                <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                              ${colors.bg} text-white px-4 py-2 rounded-md text-sm font-semibold
                              opacity-0 group-hover/icon:opacity-100 pointer-events-none transition-all duration-300
                              whitespace-nowrap z-20 shadow-xl ${colors.shadow} min-w-max
                              border border-white/20 backdrop-blur-sm`}>
                    {tech.name}
                    {/* Triangle pointer */}
                    <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 rotate-45 
                                   w-2 h-2 ${colors.bg} border-t border-l border-white/20`}>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="w-full py-24 px-6 bg-transparent text-white" id="skills">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    >
                        Skills & Expertise
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Backend Card */}
                    <div className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group shadow-lg hover:shadow-blue-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                <SiNodedotjs className="text-2xl text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-semibold">Backend</h3>
                        </div>

                        <p className="text-zinc-400 mb-6">Building robust, scalable systems that handle complex business logic and data management with performance and security in mind.</p>

                        <div className="flex flex-wrap gap-6 mb-12">
                            {backendTech.map((tech, index) => (
                                <SkillIcon key={index} tech={tech} theme="blue" />
                            ))}
                        </div>
                    </div>

                    {/* Frontend Card */}
                    <div className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group shadow-lg hover:shadow-purple-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                <SiReact className="text-2xl text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-semibold">Frontend</h3>
                        </div>

                        <p className="text-zinc-400 mb-6">Creating intuitive, responsive interfaces with smooth animations and thoughtful interactions for exceptional user experiences.</p>

                        <div className="flex flex-wrap gap-6 mb-12">
                            {frontendTech.map((tech, index) => (
                                <SkillIcon key={index} tech={tech} theme="purple" />
                            ))}
                        </div>
                    </div>

                    {/* Cloud & DevOps Card */}
                    <div className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                <SiDocker className="text-2xl text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-semibold">Cloud & DevOps</h3>
                        </div>

                        <p className="text-zinc-400 mb-6">Deploying and maintaining reliable infrastructure with modern cloud services, ensuring scalability and continuous delivery.</p>

                        <div className="flex flex-wrap gap-6 mb-12">
                            {cloudTech.map((tech, index) => (
                                <SkillIcon key={index} tech={tech} theme="cyan" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;