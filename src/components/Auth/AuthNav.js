import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from './AuthProvider'
import UserInfo from './UserInfo'

function AuthNav() {
    const loginInfo = useAuth()
  
  return (

    <div className="authnav">
        {(loginInfo.currentUser)?<Link to="/logout" className='authNavLinks'> Logout |  </Link>:<Link to="/login" className='authNavLinks'> Login |  </Link>}
        {(loginInfo.currentUser)?null:<Link to="/signup" className='authNavLinks'>| Sign Up for Free </Link>}
        <UserInfo/>
    </div>
  )
}

export default AuthNav


