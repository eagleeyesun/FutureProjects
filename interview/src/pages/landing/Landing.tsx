import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'

const Landing = () => {
  return (
    <section className="landing-container" style={{ position: 'relative' }}>
      {/* Background Image */}
      <img 
        src="/spacex.jpg" 
        alt="rocket" 
        style={{ 
          width: '100%', 
          height: '100vh', 
          objectFit: 'cover', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: 0 
        }} 
      />

      {/* Overlay Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
      </div>
    </section>
  )
}

export default Landing