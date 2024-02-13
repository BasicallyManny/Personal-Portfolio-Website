import {useState} from "react"
import { motion, AnimatePresence } from "framer-motion"
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Burger.css';


//Navigation Elements
const navItems=[
  {
    title:"About",
    href:"/About",
  },
  {
    title:"Skills",
    href:"/Skills",
  },
  {
    title:"Contact",
    href:"/Contact",
  }

]

export default function Navbar(){
  const [isActive,setActive] = useState(false)
    return (
      <div id="header">
        <div onClick={ () => {setActive(!isActive)}} className="flex items-center fixed justify-center right-0 margin:20px z-20 w-20 h-20 cursor-pointer bg-indigo-800">
          <div  className= {`Burger ${isActive ? "burgerActive" : ""}`}> </div>
        </div>
        <AnimatePresence mode='wait'>
          {isActive&& <Nav/>}
        </AnimatePresence>
      </div>
    );
}

const Nav=()=>{
  <motion.div 
    initial="initial"
    animate="enter"
    exit="exit"
    className=''
  >
    <div id="navbody">
      <div id="nav">
        <div id="header">
          <p>Navigation</p>
        </div>
        {
          navItems.map((data,index)=>(
            <a key={index} href={data.href}> {data.title}</a>
          ))
        }
      </div>
    </div>
    <Curve></Curve>
  </motion.div>
}

const Curve = ()=>{
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`

  const Curve = {
    initial: {
      d: initialPath
    },

    enter: {
      d: targetPath,
      transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },

    exit: {
      d: initialPath,
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
  }

  return (
    <svg id="svgCurve">
      <motion.path variants={Curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
}