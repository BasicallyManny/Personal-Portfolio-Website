import { motion, AnimatePresence } from 'framer-motion' // ⬅️ Add AnimatePresence
import { FiMenu, FiX } from 'react-icons/fi';
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { AiOutlineFileText } from "react-icons/ai";
import { useState, useEffect } from 'react'

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
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleIconClick = (to: string | undefined, isExternal: boolean | undefined) => {
        if (!to) return;

        if (isExternal) {
            window.open(to, '_blank');
        } else {
            window.location.href = to;
        }
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 w-full bg-black text-white z-50"
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

                    {/* Desktop Icons */}
                    <div className="hidden md:flex space-x-4">
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* AnimatePresence enables exit animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[64px] w-full bg-black shadow-lg text-white flex flex-col items-start space-y-4 py-6 md:hidden z-40"
                    >
                        {iconElements.map((element, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    handleIconClick(element.to, element.isExternal)
                                    setIsOpen(false)
                                }}
                                className="cursor-pointer px-5"
                            >
                                {element.icon}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
