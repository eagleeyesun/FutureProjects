import { Container, Title, Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import { StatsRing } from './StatsRing'

const Hero = () => {
  return (
    <div className='hero-container'>
      <Container
        size="md"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: '100px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Title order={1} mb="md" style={{
          fontSize: '2.8rem',
          fontWeight: 900,
          lineHeight: 1.2,
        }}>
          Welcome to the Rocketery of <br /> SpaceX
        </Title>

        <div style={{ margin: '40px 0' }}>
          <StatsRing />
        </div>

        <Link to='/list'>
          <Button
            variant="gradient"
            size="md"
            radius="xl"
          >
            Learn More
          </Button>
        </Link>
      </Container>
    </div>
  )
}

export default Hero