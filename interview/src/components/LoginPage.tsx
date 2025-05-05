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
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import useAppStore from '../store/app.store'
import { IconHome } from '@tabler/icons-react';

const LoginPage = () => {
  const login = useAppStore((state) => state.login)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      login()
      navigate('/list')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <Container size="xs" my="xl">
      <Anchor
        component={Link}
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
          color: 'teal',
          textDecoration: 'none',
        }}
      >
        <IconHome size={30} />Home
      </Anchor>
      <Title align="center" mb="lg">Login</Title>
      <Paper withBorder p="md" shadow="sm">
        <form onSubmit={handleLogin}>
          <Stack>
            <TextInput
              label="Email"
              value={email}
              labelProps={{ style: { color: 'black' } }}
              onChange={(e) => setEmail(e.currentTarget.value)}
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