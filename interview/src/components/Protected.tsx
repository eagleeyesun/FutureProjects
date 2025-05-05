import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import useAppStore from '../store/app.store'

interface Props {
  children: ReactNode
}

const Protected = ({ children }: Props) => {
  const { isAuthenticated } = useAppStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>;
}

export default Protected;