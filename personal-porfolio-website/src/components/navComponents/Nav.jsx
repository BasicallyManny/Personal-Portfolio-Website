import { motion } from "framer-motion";
import "./Burger.css";
import Curve from "./curve";
import { menuSlide } from "../constants/anime";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineMail ,
  AiOutlineHome,
  AiOutlineDesktop,
  AiOutlineFileText,
} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Contact from "../Contact";
//Navigation Elements
const navItems = [
  {
    title: "Home",
    href: "/Home",
    icon: <AiOutlineHome size={45}></AiOutlineHome>,
  },
  {
    title: "Skills",
    href: "/Skills",
    icon: <AiOutlineDesktop size={45}></AiOutlineDesktop>,
    spaceBetween: "     ",
  },
  {
    title: "Projects",
    href: "/Projects",
    icon: (
      <AiOutlineFundProjectionScreen size={45}></AiOutlineFundProjectionScreen>
    ),
  },
  {
    title: "Resume",
    href: "/Resume",
    icon: <AiOutlineFileText size={45}></AiOutlineFileText>,
  },
];

const Navitems = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu z-40"
    >
      <div className="body">
        <div className="nav">
          <div className="header">
            <p>Navigation</p>
          </div>
          <div
            id="navElements"
            className="flex flex-col items-center min-h-fit"
          >
            {navItems.map((data, index) => (
              <a className="" key={index} href={data.href}>
                {data.icon}
                {data.spaceBetween}
                {data.title}
              </a>
            ))}
          </div>
          <div className="flex justify-center w-full">
            <Button
              className="text-white w-full bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 flex-end bottom-0 font-medium rounded-lg text-lg	 px-5 py-2.5 text-center me-2 mb-3"
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              <AiOutlineMail  size={45} />
            </Button>
            <Contact show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Navitems;
