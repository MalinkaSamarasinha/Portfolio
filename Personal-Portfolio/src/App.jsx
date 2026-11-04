import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar.jsx"
import Hero from "./Components/Hero.jsx"
import About from "./Components/About.jsx"
import MyWork from "./Components/MyWork.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
    </>
  )
}

export default App
