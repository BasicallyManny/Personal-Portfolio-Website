import { motion} from "framer-motion"
import './Burger.css';
import Curve from "./curve";
import { menuSlide } from "../constants/anime"
import {AiOutlineFundProjectionScreen,AiOutlinePhone,AiOutlineHome, AiOutlineDesktop, AiOutlineFileText  } from "react-icons/ai";



//Navigation Elements
const navItems=[
    {
        title:"Home",
        href:"/Home",
        icon:<AiOutlineHome size={45}></AiOutlineHome>,
   
    },
    {
      title:"Skills",
      href:"/Skills",
      icon:<AiOutlineDesktop size={45}></AiOutlineDesktop>,
      spaceBetween:"     ",
    },
    {
        title: "Projects",
        href: "/Projects",
        icon:<AiOutlineFundProjectionScreen size={45}></AiOutlineFundProjectionScreen>,

    },
    {
        title:"Resume",
        href:"/Contact",
        icon:<AiOutlineFileText size={45}></AiOutlineFileText>,
    },
    {
      title:"Contact",
      href:"/Contact",
      icon:<AiOutlinePhone size={45}></AiOutlinePhone>,
    }
  
  ];
  
  const Navitems = () => {
      return (
          <motion.div
          variants={menuSlide}
          initial='initial'
          animate='enter'
          exit='exit'
          className="menu z-40"
          > 
              <div className="body">
                  <div className="nav">
                      <div className="header">
                          <p>Navigation</p>
                      </div>
                      <div id="navElements" className="flex flex-col items-center">
                      {
                          navItems.map((data, index) => (
                            <a  className=""
                                key={index}
                                href={data.href}
                            >
                                {data.icon}{data.spaceBetween}{data.title}
                            </a>

                          ))
                      }
                      </div>
                  </div>
              </div>
              <Curve/>
          </motion.div>
      )
  }
  
  export default Navitems