import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Games from './components/Games'
import Schedule from './components/Schedule'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Games />
      <Schedule />
      <About />
      <Sponsors />
      <Contact />
    </div>
  )
}

export default App
