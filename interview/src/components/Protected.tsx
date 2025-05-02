import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import useAppStore from '../store/app.store'

interface Props {
  children: ReactNode
}

const Protected = ({ children }: Props) => {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated)

  return isAuthenticated ? children : <Navigate to="/login" replace />
}

export default Protected