import './App.css'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css' //import bootstrap styles
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects'
//import Contact from './components/Contact'

function App() {

  return (
    <main>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </main>
  )
}

export default App
