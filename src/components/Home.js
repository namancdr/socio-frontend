import React from 'react'
import Posts from './Posts'


const Home = () => {
  
  return (
    <div style={{marginTop: "80px", marginBottom: "80px"}}>
      <div className='greetings'>
        <strong><span className='text-muted small'>Good Morning</span></strong><br />
        <span className='h1'>Namancdr</span>
      </div>
      <hr />

      <Posts />
    </div>
  )
}

export default Home