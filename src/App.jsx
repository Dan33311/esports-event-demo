import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Games from './components/Games'
import Schedule from './components/Schedule'
import About from './components/About'
import Sponsors from './components/Sponsors'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Games />
      <Schedule />
      <About />
      <Sponsors />
    </div>
  )
}

export default App
