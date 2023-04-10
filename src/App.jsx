import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Games from './components/Games';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Games />
    </div>
  )
}

export default App
