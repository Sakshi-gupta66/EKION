import { auth, googleProvider } from '../../utils/firebase'
import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import api from '../../utils/axios'

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
  return(
    <div className='flex h-screen bg-black text-white overflow-hidden'>
      <div className='fixed inset-0 z-50 flex flex-col justify-center items-center w-full bg-black/60 backdrop-blur-sm'>
      
      </div>
    </div>
  )
}

export default Home