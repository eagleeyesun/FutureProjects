import { Button, Container, Stack, Title, Center } from '@mantine/core'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Center style={{ height: '100vh' }}>
      <Container size="sm">
        <Stack align="center" spacing="xl">
          <Title order={1} align="center">
            Welcome to the ROCKETRY of SpaceX
          </Title>

          <Stack spacing="md">
            <Button component={Link} to="/login" variant="outline" size="lg" fullWidth>
              Login
            </Button>
            <Button component={Link} to="/register" size="lg" fullWidth>
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Center>
  )
}

export default Landing