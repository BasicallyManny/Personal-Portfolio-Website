import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

// Load Particles
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useState, useEffect, useRef } from 'react';

// Import your particles options
import stars from './components/ui/stars';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [objectPosition, setObjectPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const animationFrameId = useRef<number | null>(null);
  const prevMousePosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const isMoving = useRef(false);
  const movementTimer = useRef<ReturnType<typeof setTimeout> | null>(null);


  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });

    isMoving.current = true;

    if (movementTimer.current) {
      clearTimeout(movementTimer.current);
    }

    movementTimer.current = setTimeout(() => {
      isMoving.current = false;
    }, 50);

    prevMousePosition.current = { x: event.clientX, y: event.clientY };
  }, []);

  useEffect(() => {
    const lagSpeed = 0.01;
    const floatSpeed = 0.01;

    const updatePosition = () => {
      const dx = mousePosition.x - objectPosition.x;
      const dy = mousePosition.y - objectPosition.y;
      const currentSpeed = isMoving.current ? lagSpeed : floatSpeed;

      setObjectPosition(prevPos => ({
        x: prevPos.x + dx * currentSpeed,
        y: prevPos.y + dy * currentSpeed,
      }));

      animationFrameId.current = requestAnimationFrame(updatePosition);
    };

    animationFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (movementTimer.current) {
        clearTimeout(movementTimer.current);
      }
    };
  }, [mousePosition, objectPosition]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
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

      {/* Spinning & pulsing image that follows the cursor */}
      <div
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          transform: `translate3d(${objectPosition.x}px, ${objectPosition.y}px, 0)`,
          zIndex: 1,
          transition: 'transform 0.02s ease-out',
          willChange: 'transform',
        }}
      >
        <img
          src="../assets/sus.png"
          alt="Cursor follower"
          width="60"
          height="60"
          style={{
            animation: 'spin 8s linear infinite, pulse 2s ease-in-out infinite',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* App content */}
      <div className="relative z-10">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
