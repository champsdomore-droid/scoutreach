import './App.css'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Solution from './components/Solution'
import WhoItsFor from './components/WhoItsFor'
import Pricing from './components/Pricing'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <PainPoints />
      <Solution />
      <WhoItsFor />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
