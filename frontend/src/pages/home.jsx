import { auth, googleProvider } from '../utils/firebase'
import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import api from '../utils/axios'

function Home() {

  const handleLogin = async (token) => {
  try{
    const {data}  = await api.post("/auth/login",{token})
    console.log(data)
  }catch(error){
    console.log(error)
  }

}

  const googleLogin = async () => {
    const data = await signInWithPopup(auth, googleProvider)
    const token = await data.user.getIdToken()
    console.log(token)
    await handleLogin(token)
    console.log(data)
  }
  return <div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={googleLogin}>
      Home
    </button>
  </div>
}

export default Home