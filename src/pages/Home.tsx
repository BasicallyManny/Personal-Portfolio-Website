import { Hero } from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Footer from "../components/sections/Footer";
import { motion } from "framer-motion";

export const Home = () => {
    return (
        <main>
            <section>
                <Hero />
            </section>
            <motion.section
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }} // This ensures it triggers when it enters and exits the viewport
            >
                <Projects />
            </motion.section>
            <motion.section
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }} // Ensures the effect triggers as it scrolls in and out of view
            >
                <Skills />
            </motion.section>
            <motion.section
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }} // Ensures the effect triggers as it scrolls in and out of view
            >
                <Footer />
            </motion.section>
        </main>
    );
};
