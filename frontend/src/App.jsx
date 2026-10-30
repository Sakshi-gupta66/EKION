import { auth, googleProvider } from '../utils/firebase'
import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import api from '../utils/axios'
import Home from './pages/home'

function App() {

  
  return (
    <>
    <Home/>
    </>
  )
}

export default App