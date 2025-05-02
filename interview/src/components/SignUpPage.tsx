import { useNavigate } from 'react-router-dom'
import { Button, TextInput, Container, Title, Paper, Group, Text } from '@mantine/core'
import { useState } from 'react'

const SignUpPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignup = () => {
    if (!username || !password) {
      setError('Please fill in all fields.')
      return
    }

    const existingUser = localStorage.getItem(`user:${username}`)
    if (existingUser) {
      setError('User already exists.')
      return
    }

    localStorage.setItem(`user:${username}`, password)
    navigate('/login')
  }

  return (
    <Container size="xs" my="xl">
      <Title align="center" mb="lg">Sign Up</Title>
      <Paper withBorder p="md" shadow="sm">
        <TextInput
          label="Username"
          value={username}
          labelProps={{ style: { color: 'black' } }}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <TextInput
          label="Password"
          type="password"
          mt="sm"
          value={password}
          labelProps={{ style: { color: 'black' } }}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        {error && <Text color="red" size="sm" mt="sm">{error}</Text>}
        <Group mt="md" position="right">
          <Button onClick={handleSignup} color="teal">Sign Up</Button>
        </Group>
      </Paper>
    </Container>
  )
}

export default SignUpPage