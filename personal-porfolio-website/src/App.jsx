import './App.css'
import "./index.css"
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
//import Projects from './components/Projects'
//import Contact from './components/Contact'

function App() {

  return (
    <main>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
    </main>
  )
}

export default App
