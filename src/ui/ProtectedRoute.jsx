import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useUser } from '../features/authentication/useUser'
import Spinner from './Spinner'

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading } = useUser()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate('/login')
  }, [navigate, isAuthenticated, isLoading])

  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )
  }

  if (isAuthenticated) return children
}

export default ProtectedRoute
