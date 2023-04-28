import React from 'react'
import { Link } from 'react-router-dom' 

export const Home = () => {
  return (
    <div>
        <div>
          <h1>Welcome to shop</h1>
        
        
        <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}


