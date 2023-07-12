import React from 'react'
import logo from '../../../assets/images/logo/implifi.png'
import { Link } from 'react-router-dom'
import './style.css'

function Login() {
  return (
    <div className='login-main'>
      <img src={logo} className='login-logo'/>
      <div className='login-form'>
          <div className='lf-top'>
              <h2>Login</h2>
              <Link>Don't have an account?</Link>
          </div>
          <div className='lf-body'>
              <div className='lf-form-group'>
                <label>Email</label>
                <input type='text' />
              </div>
              <div className='lf-form-group'>
                <label>Password</label>
                <input type='password' />
              </div>
          </div>
      </div>

    </div>
  )
}

export default Login
