import React from 'react'
import Posts from './Posts'
import { useAuth } from '../context/auth/authContext'
const Home = () => {

  const {user} = useAuth()
  
  return (
    <div style={{marginTop: "60px", marginBottom: "80px"}}>
      {user && <div className='greetings'>
         <strong><span className='text-muted small'>Good Morning</span></strong><br />
        <span className='h1'>{user.name}</span>
      </div>}
      <hr />

      <Posts />
    </div>
  )
}

export default Home