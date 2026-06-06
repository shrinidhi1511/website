import './index.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
