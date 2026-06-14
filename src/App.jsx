import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Performance from './components/Performance'
import Transition from './components/Transition'
import TransitionInverse from './components/TransitionInverse'
import Camera from './components/Camera'
import Cores from './components/Cores'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-out-cubic',
    });
  }, []);


  return (
    <>
     <NavBar />
     <Hero />
     <Intro />
     <Transition/>
     <Performance />
     <TransitionInverse/>
     <Camera/>
     <Cores/>
     <Footer/>
    </>
  )
}

export default App
