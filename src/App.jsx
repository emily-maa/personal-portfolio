import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './common/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import { Navigation } from './sections/Navigation/Navigation'
function App() {

  return (
    <>
      <Navigation/>
      <Hero/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
