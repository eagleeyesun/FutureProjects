import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'

const Landing = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        height: '100svh',
        width:'100vw',
        backgroundImage: 'url(/spacex.jpg)',
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <Navbar />
      </div>

      <div style={{ position: 'absolute', top: '20%', left: 0, right: 0 }}>
        <Hero />
      </div>
    </section>


  )
}

export default Landing