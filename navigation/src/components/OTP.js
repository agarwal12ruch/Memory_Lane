import React from 'react'
import './login.css'
import user_light from '../../src/components/assets/user_light.png'
import user_dark from '../../src/components/assets/user_dark.png'
import fb_dark from '../../src/components/assets/fb_dark.png'
import fb_light from '../../src/components/assets/fb_light.png'
import google_dark from '../../src/components/assets/google_dark.png'
import google_light from '../../src/components/assets/google_light.png'
import lock_light from '../../src/components/assets/lock_light.png'
import lock_dark from '../../src/components/assets/lock_dark.png'
import {Link} from 'react-router-dom'
const OTP = ({theme,settheme}) => {
  return (
    <div className='Login'>
      <div className="wrapper">
            <form action="">
                <h1>OTP Verification</h1>
                <div className="input-box">
                    <input type="text" placeholder="Enter Email / Number" required />
                    <img src={theme==='light'? user_dark:user_light} alt=''></img>
                </div>
                <div className="input-box">
                    <input type="otp" placeholder="Enter OTP" required />
                    <img src={theme==='light'? lock_dark:lock_light} alt=''></img>
                </div>
                <div className="remember-forget">
                    <label>
                        <input type="checkbox" />Remember me
                    </label>
                </div>
                <button type="submit" className="btn" id="redirectButton">VERIFY</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/SignIn">Register</Link></p>
                </div>
                <div className='OTP'>
                  <Link to='/LogIn'>
                    <span>LogIn Via User Name and Password</span>
                  </Link>
                </div>
                <h3>OR</h3>
                <div className="media-option">
                    <Link to="https://google.com">
                    <img src={theme==='light'? google_dark:google_light} alt=''></img>
                        <span>Login with Google</span>
                    </Link>
                    <Link to="https://facebook.com">
                    <img src={theme==='light'? fb_dark:fb_light} alt=''></img>
                        <span>Login with Facebook</span>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default OTP
