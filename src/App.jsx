import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Games from './components/Games'
import Schedule from './components/Schedule'
import About from './components/About'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Games />
      <Schedule />
      <About />
    </div>
  )
}

export default App
