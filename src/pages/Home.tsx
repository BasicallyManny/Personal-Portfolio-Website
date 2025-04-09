import { Hero } from "../components/sections/Hero";
import Projects  from "../components/sections/Projects";

export const Home = () => {
    return (
        <main>
            <section>
                <Hero />
            </section>
            <section className="mt-10">
                <Projects />
            </section>
        </main>
    );
};