import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

// Load Particles
import Particles from "react-tsparticles";

// Import your particles options
import stars from './components/ui/stars';

function App() {

  return (
    <>
      {/* Full-screen particle background */}
      <Particles
        className="absolute-background"
        id="tsparticles"
        options={stars}
      />
  

      {/* App content */}
      <div className="relative z-10">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
