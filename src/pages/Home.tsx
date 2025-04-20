import { Hero } from "../components/sections/Hero";
import Projects  from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

export const Home = () => {
    return (
        <main>
            <section>
                <Hero />
            </section>
            <section className="mt-10">
                <Projects />
            </section>
            <section className="mt-10">
                <Skills />
            </section>
        </main>
    );
};