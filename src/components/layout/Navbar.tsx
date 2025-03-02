import React from 'react'
import { motion } from 'framer-motion'
import { link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi';

import { useState, useEffect } from 'react'

interface NavElement {
    name: string
    to: string
    offset: number
}

const navElements: NavElement[] = [
    { name: 'Home', to: 'hero', offset: 0 },
    { name: 'About', to: 'about', offset: -70 },
    { name: 'Projects', to: 'projects', offset: -70 },
    { name: 'Experience', to: 'experience', offset: -70 },
    { name: 'Skills', to: 'skills', offset: -70 },
    { name: 'Contact', to: 'contact', offset: -70 },
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
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full flex justify-between items-center px-4 py-2 bg-gray-800 text-white z-50"
        >
            <div className="flex items-center">
                <h1 className="text-2xl font-bold">Manny Fong</h1>
            </div>
            <ul className="hidden md:flex space-x-4">
                {navElements.map((element, index) => (
                    <motion.li
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.a
                            href={`#${element.to}`}
                            onClick={() => {
                                link.scroll({
                                    el: `#${element.to}`,
                                    offset: element.offset,
                                })
                            }}
                            className="cursor-pointer"
                        >
                            {element.name}
                        </motion.a>
                    </motion.li>
                ))}
            </ul>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>
            {isOpen && (
                <motion.ul
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:hidden flex flex-col space-y-4"
                >
                    {navElements.map((element, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.a
                                href={`#${element.to}`}
                                onClick={() => {
                                    link.scroll({
                                        el: `#${element.to}`,
                                        offset: element.offset,
                                    })
                                }}
                                className="cursor-pointer"
                            >
                                {element.name}
                            </motion.a>
                        </motion.li>
                    ))}
                </motion.ul>    
            )}
                       

        </motion.nav>
    )
}
