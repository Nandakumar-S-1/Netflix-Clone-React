import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const ProtectedRoute = ({ children }) => {
    //useAuthState willl simplifies Firebase Authentication by  real times access to the authentication state of the current user.
  const [user, loading] = useAuthState(auth)

  if (loading) return <h2>Loading...</h2>

  if (!user) return <Navigate to="/login" />

  return children
}

export default ProtectedRoute
