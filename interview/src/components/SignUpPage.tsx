import { useNavigate,Link } from 'react-router-dom'
import {
  Button,
  TextInput,
  Container,
  Title,
  Paper,
  Group,
  Text,
  Anchor
} from '@mantine/core'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import { IconHome } from '@tabler/icons-react';


const SignUpPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignup = async () => {
    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/login')
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
      <Title align="center" mb="lg">Sign Up</Title>
      <Paper withBorder p="md" shadow="sm">
        <TextInput
          label="Email"
          value={email}
          labelProps={{ style: { color: 'black' } }}
          onChange={(e) => setEmail(e.currentTarget.value)}
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