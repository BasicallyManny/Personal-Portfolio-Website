import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

// Load Particles
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from 'react';

// Import your particles options
import stars from './components/particles/stars';

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // Loads slim version of tsparticles
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log(container);
  }, []);

  return (
    <>
      {/* Full-screen particle background */}
      <Particles
        className="absolute-background"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={stars}
      />

      {/* Actual app content */}
      <div className="relative z-10">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
