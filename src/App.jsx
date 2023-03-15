import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import GamesBar from './components/Games-list'
import Animation from './components/Animation'

function App() {

  return (
    <div className="App">
      <Navbar />
      <GamesBar />
      <Animation />
    </div>
  )
}

export default App
