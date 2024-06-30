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
import email_light from '../../src/components/assets/email_light.png'
import email_dark from '../../src/components/assets/email_dark.png'
import {Link} from 'react-router-dom'
const SignIn = ({theme,settheme}) => {
  return (
    <div className='Login'>
      <div className="wrapper">
            <form action="">
                <h1>SignIn</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <img src={theme==='light'? user_dark:user_light} alt=''></img>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Enter Mail/Number" required />
                    <img src={theme==='light'? email_dark:email_light} alt=''></img>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <img src={theme==='light'? lock_dark:lock_light} alt=''></img>
                </div>
                <div className="remember-forget">
                    <label>
                        <input type="checkbox" />Remember me
                    </label>
                    <Link to="/OTP">LogIn Via OTP</Link>
                </div>
                <button type="submit" className="btn" id="redirectButton">CREATE ACCOUNT</button>
                <div className="register-link">
                    <p>Already have an account ?<Link to="/LogIn"> LogIn</Link></p>
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

export default SignIn
