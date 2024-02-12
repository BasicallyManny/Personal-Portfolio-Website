import './App.css'
import "./index.css"
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <main>
      <Navbar></Navbar>
      <About></About>
      <techStack></techStack>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  )
}

export default App
