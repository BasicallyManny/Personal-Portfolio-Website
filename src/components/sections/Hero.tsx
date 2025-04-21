import { motion } from 'framer-motion';
import OrbitingIcon from '../ui/OrbitingIcons';
// Updated icons array with a third outer ring
import { FaReact, FaPython } from 'react-icons/fa';
import { SiFastapi, SiTypescript, SiMongodb, SiTailwindcss, SiMysql, SiLangchain } from "react-icons/si";

import profileIMG from '../../../assets/me.webp';

export const Hero = () => {
    // Text animation variants
    const titleVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 10,
                duration: 0.8 
            }
        }
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 50, 
                damping: 20,
                delay: 0.4,
                duration: 0.8 
            }
        }
    };

    // Container animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    // Profile container animation
    const profileContainerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.5,
                duration: 0.8
            }
        }
    };

    // Gradient background animation
    const gradientVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0, 0.5, 0.3, 0.5, 0.3],
            transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse" as const
            }
        }
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen text-white my-5 space-between overflow-hidden relative">
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"
                variants={gradientVariants}
                initial="hidden"
                animate="visible"
            />

            <motion.div 
                id="hero-content" 
                className="mx-auto max-w-screen-xl grid grid-cols-1 items-center mt-7 sm:grid-cols-2 h-full relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    id="hero-text" 
                    className="text-center sm:ml-20 sm:text-left flex flex-col items-center sm:items-start"
                >
                    <motion.h1 
                        className="text-5xl font-bold mb-4 md:justify-center sm:text-6xl"
                        variants={titleVariants}
                    >
                        <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hello, I'm Manny Fong</h1>{' '}
                        <motion.span
                            className="inline-block mt-7"
                            animate={{
                                rotate: [0, 10, 0, -10, 0],
                            }}
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                        >
                            👋
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                        className="z-10 max-w-prose px-10 text-l mb-6 mt-6 sm:px-0"
                        variants={paragraphVariants}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            Software engineer focused on building fast, intuitive web apps with React, TypeScript, FastAPI, and MongoDB. 
                            Interested in web development, AI, and scalable systems. Recently exploring AI integration using the LangChain 
                            framework.
                        </motion.span>
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="relative flex justify-center items-center w-64 h-64 mx-auto z-10"
                    variants={profileContainerVariants}
                >
                    {/* Profile Image with OrbitingIcon */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <OrbitingIcon
                            profileSrc={profileIMG}
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
                    </motion.div>
                </motion.div>
            </motion.div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full opacity-20"
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};