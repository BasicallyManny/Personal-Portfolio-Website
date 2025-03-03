import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import OrbitingIcon from '../ui/orbitingIcons';
// Updated icons array with a third outer ring
import { FaReact, FaNodeJs, FaGithub, FaPython } from 'react-icons/fa';


export const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-white my-5 space-between">
            <div id="hero-content" className="mx-auto max-w-screen-xl grid grid-cols-1 items-center sm:grid-cols-2 h-full">
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
                    <p className="max-w-prose px-10 text-xl mb-6 sm:px-0 ">I am a passionate software engineer with an interest in</p>
                    <div id="typewriter-effect" className="text-xl my-6">
                        <Typewriter
                            words={['Full-Stack Development', 'Artificial Intelligence', 'Freelance', 'UI/UX Designs']}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>

                <div className="relative flex justify-center items-center w-64 h-64 mx-auto z-10">
                    {/* Profile Image */}
                    <OrbitingIcon
                        profileSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        profileAlt="Profile"
                        icons={[
                            { Icon: FaReact },
                            { Icon: FaNodeJs},
                            { Icon: FaGithub},
                            { Icon: FaPython },
                        ]}
                    />


                    {/* Orbiting Icons */}
                </div>

            </div>
        </section>
    );
};
