import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Work from "./components/Work"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import WhyUs from "./components/whyUs"
import Plans from "./components/Plans"


function App() {


  return (
    <main className="flex flex-col">
    <div className="relative w-screen h-screen">
      <img
        src="/Gradient.png"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <Navbar />
      <Hero />
    </div>

    <Work />

    <div className="w-screen min-h-screen">
      <About />
    </div>

    <Testimonials />

    <WhyUs />
    <div className="w-screen h-screen">
      <Plans />
    </div>
 



    </main>
  )
}

export default App
