import { motion } from 'framer-motion' 
import { useState, useEffect } from 'react'
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { AiOutlineFileText } from "react-icons/ai";

interface IconElement {
    icon?: React.ReactNode
    to?: string
    isExternal?: boolean
}

const iconElements: IconElement[] = [
    { icon: <LuGithub size={25} color='violet' />, to: 'https://github.com/BasicallyManny', isExternal: true },
    { icon: <LuLinkedin size={25} color='white'/>, to: 'https://www.linkedin.com/in/manfred-fong-532548300/', isExternal: true },
    { icon: <AiOutlineFileText size={25} color='green' />, to: "/SWEResume.pdf", isExternal: true }
]

export const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleIconClick = (to: string | undefined, isExternal: boolean | undefined) => {
        if (!to) return;

        if (isExternal) {
            window.open(to, '_blank');
        } else {
            window.location.href = to;
        }
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 w-full text-white z-50 backdrop-blur-sm bg-black/20"
        >
            <div className="flex justify-between items-center h-full mx-auto max-w-7xl p-4 w-full">
                {/* Logo */}
                <div className="flex items-center">
                    <h1 className="flex text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        <span
                            className="mr-2 cursor-pointer"
                            onClick={() => window.location.href = '/'}
                        >
                            MF
                        </span>
                    </h1>
                </div>

                {/* Icons - now visible on all screen sizes */}
                <div className="flex space-x-4">
                    {iconElements.map((element, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleIconClick(element.to, element.isExternal)}
                            className="cursor-pointer"
                        >
                            {element.icon}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar