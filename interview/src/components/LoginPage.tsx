import { useNavigate, Link } from 'react-router-dom'
import {
  Button,
  TextInput,
  Container,
  Title,
  Paper,
  Group,
  Text,
  Anchor,
  Stack,
} from '@mantine/core'
import { useState } from 'react'
import useAppStore from '../store/app.store'

const LoginPage = () => {
  const { login } = useAppStore()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const storedPassword = localStorage.getItem(`user:${username}`)
    if (storedPassword && storedPassword === password) {
      login()
      navigate('/list')
    } else {
      setError('Invalid username or password.')
    }
  }

  return (
    <Container size="xs" my="xl">
      <Title align="center" mb="lg">Login</Title>
      <Paper withBorder p="md" shadow="sm">
        <form onSubmit={handleLogin}>
          <Stack>
            <TextInput
              label="Username"
              value={username}
              labelProps={{ style: { color: 'black' } }}
              onChange={(e) => setUsername(e.currentTarget.value)}
              required
            />
            <TextInput
              label="Password"
              type="password"
              value={password}
              labelProps={{ style: { color: 'black' } }}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />
            {error && <Text color="red" size="sm">{error}</Text>}
            <Group position="right">
              <Button type="submit" color="teal">Login</Button>
            </Group>
            <Text size="sm" align="center">
              Don't have an account?{' '}
              <Anchor component={Link} to="/signup" size="sm">
                Sign Up
              </Anchor>
            </Text>
          </Stack>
        </form>
      </Paper>
    </Container>
  )
}

export default LoginPage