import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 border-t border-gray-800">
            <div className="container mx-auto text-center">
                {/* Social Media Icons */}
                <div className="flex justify-center items-center mb-4">
                    <motion.a
                        href="https://github.com/BasicallyManny"
                        className="text-gray-400 hover:text-white mx-4"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaGithub color='violet' size={24} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/manfred-fong-532548300/"
                        className="text-gray-400 hover:text-white mx-4"
                        whileHover={{ scale: 1.2, rotate: -15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaLinkedin color='white' size={24} />
                    </motion.a>
                    <motion.a
                        href="/resume"
                        className="text-gray-400 hover:text-white mx-4"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaFileAlt color='green' size={24} />
                    </motion.a>
                </div>

                {/* Crafted with love message */}
                <motion.p 
                    className="text-m text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Crafted with <span className="text-red-500">❤️</span> by Manny Fong
                </motion.p>
            </div>
        </footer>
    );
}

export default Footer;
