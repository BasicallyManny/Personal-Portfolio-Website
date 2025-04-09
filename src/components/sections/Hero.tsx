import { motion } from 'framer-motion';
import OrbitingIcon from '../ui/orbitingIcons';
// Updated icons array with a third outer ring
import { FaReact, FaPython } from 'react-icons/fa';
import { SiFastapi, SiTypescript, SiMongodb, SiTailwindcss, SiMysql, SiLangchain } from "react-icons/si";


export const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-white my-5 space-between overflow-hidden">
            <div id="hero-content" className="mx-auto max-w-screen-xl grid grid-cols-1 items-center mt-7 sm:grid-cols-2 h-full">
                <div id="hero-text" className="text-center sm:ml-20 sm:text-left flex flex-col items-center sm:items-start">
                    <h1 className="text-5xl font-bold mb-4 md:justify-center sm:text-6xl">
                        Hello, I'm Manny Fong{' '}
                        <motion.span
                            className="inline-block"
                            animate={{
                                rotate: [0, 10, 0, -10, 0],
                            }}
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                                repeat: Infinity,  // Loop the animation
                                repeatType: 'loop', // Ensures it loops
                            }}
                        >
                            👋
                        </motion.span>
                    </h1>
                    <p className="z-10max-w-prose px-10 text-l mb-6 mt-6 sm:px-0 ">
                        Software engineer focused on building fast, intuitive web apps with React, TypeScript, FastAPI, and MongoDB. 
                        Interested in web development, AI, and scalable systems. Recently exploring AI integration using the LangChain 
                        framework.
                    </p>
                </div>

                <div className="relative flex justify-center items-center w-64 h-64 mx-auto z-10">
                    {/* Profile Image */}
                    <OrbitingIcon
                        profileSrc="../../../assets/me.webp"
                        profileAlt="Profile"
                        icons={[
                            { Icon: FaReact },
                            { Icon: FaPython },
                            { Icon: SiFastapi },
                            { Icon: SiTypescript },
                            { Icon: SiMongodb },
                            { Icon: SiTailwindcss },
                            { Icon: SiMysql },
                            { Icon: SiLangchain },
                        ]}
                    />
                </div>

            </div>
        </section>
    );
};
