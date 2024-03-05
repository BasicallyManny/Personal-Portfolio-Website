import { useState } from "react"
import Navitems from "./navComponents/Nav"
import { AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div>
                <div onClick={() => {setIsActive(!isActive)}} className="fixed right-0 m-5 w-16 h-16 bg-purple-950 cursor-pointer flex items-center justify-center z-50 rounded-full">
                    <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
                </div>
            </div>

            <AnimatePresence mode='wait'>
                {isActive && <Navitems/>}
            </AnimatePresence>
        </>  
    )
}

export default Navbar