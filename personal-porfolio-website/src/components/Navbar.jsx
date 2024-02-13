import { useState } from "react"
import Nav from "./navComponents/Nav"
import { AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div>
                <div onClick={() => {setIsActive(!isActive)}} className="fixed right-0 m-5 w-20 h-20 bg-indigo-600 cursor-pointer flex items-center justify-center z-10 rounded-full">
                    <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
                </div>
            </div>

            <AnimatePresence mode='wait'>
                {isActive && <Nav/>}
            </AnimatePresence>
        </>  
    )
}

export default Navbar