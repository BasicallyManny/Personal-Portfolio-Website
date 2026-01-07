import { Hero } from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Footer from "../components/sections/Footer";
import { motion } from "framer-motion";

export const Home = () => {
    return (
        <main className="relative">
            <section className="relative z-10">
                <Hero />
            </section>
            <motion.section
                className="relative z-10 py-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <Projects />
            </motion.section>
            <motion.section
                className="relative z-10 py-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <Skills />
            </motion.section>
            <motion.section
                className="relative z-10 py-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <Footer />
            </motion.section>
        </main>
    );
};