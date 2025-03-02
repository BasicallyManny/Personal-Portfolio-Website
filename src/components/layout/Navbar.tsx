import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi';

import { LuGithub,LuLinkedin, LuMail, } from "react-icons/lu";
import { AiOutlineFileText } from "react-icons/ai";



import { useState, useEffect } from 'react'


interface NavElement {
    name: string
    to: string
    offset: number
}

interface IconElement {
    icon?: React.ReactNode
    to?: string
}

const navElements: NavElement[] = [
    { name: 'About', to: 'about', offset: -70 },
    { name: 'Projects', to: 'projects', offset: -70 },
    { name: 'Contact', to: 'contact', offset: -70 },
]

const iconElements: IconElement[] = [
    { icon: <LuGithub size={25} />, to: 'https://github.com/BasicallyManny' },
    {icon: <LuLinkedin size={25}/>, to: 'https://www.linkedin.com/in/manfred-fong-532548300/'},
    {icon: <LuMail size={25}/>},
    {icon: <AiOutlineFileText size={25}/>}
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

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full bg-transparent text-white z-50"
        >
            <div className="flex justify-between items-center h-full mx-auto max-w-7xl p-4 w-full">
                {/* Logo */}
                <div className="flex items-center">
                    <h1 className="flex text-2xl font-bold">
                        <span className="mr-2">MF</span>
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6">
                    {navElements.map((element, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.a
                                href={`#${element.to}`}
                                className="cursor-pointer text-lg"
                            >
                                {element.name}
                            </motion.a>
                        </motion.li>
                    ))}
                </ul>

                {/* Desktop Icons */}
                <div className="hidden md:flex space-x-4">
                    {iconElements.map((element, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick ={() => window.open(element.to, '_blank')}  
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

            {/* Mobile Menu*/}
            <motion.div
                initial={false} // Let animation depend on isOpen
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                    open: { opacity: 1, height: 'auto', y: 0 },
                    closed: { opacity: 0, height: 0, y: -20 },
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden bg-black/80 w-full absolute left-0 top-full"
            >
                <ul className="flex flex-col space-y-4 p-4">
                    {navElements.map((element, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a
                                href={`#${element.to}`}
                                className="cursor-pointer text-lg"
                                onClick={() => setIsOpen(false)} // Close after click
                            >
                                {element.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

        </motion.nav>
    )
}
