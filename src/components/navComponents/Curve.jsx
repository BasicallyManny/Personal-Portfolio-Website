import { motion,} from "framer-motion"
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Burger.css';

export default function Curve(){
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
    };
  
    return (
      <svg id="svgCurve" className="svgCurve absolute top-0 h-full stroke-none">
        <motion.path variants={Curve} initial="initial" animate="enter" exit="exit"></motion.path>
      </svg>
    )
  }