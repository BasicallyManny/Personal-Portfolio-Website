import { motion} from "framer-motion"
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Burger.css';
import Curve from "./curve";
import { menuSlide } from "../constants/anime"

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
        title: "Projects",
        href: "/Projects",
    },
    {
      title:"Contact",
      href:"/Contact",
    }
  
  ];
  
  const Nav = () => {
      return (
          <motion.div
          variants={menuSlide}
          initial='initial'
          animate='enter'
          exit='exit'
          className="menu"
          >
              <div className="body">
                  <div className="nav">
                      <div className="header">
                          <p>Navigation</p>
                      </div>
                      {
                          navItems.map((data, index) => (
                              <a
                                  key={index}
                                  href={data.href}
                              >
                                  {data.title}
                              </a>
                          ))
                      }
                  </div>
              </div>
              <Curve/>
          </motion.div>
      )
  }
  
  export default Nav