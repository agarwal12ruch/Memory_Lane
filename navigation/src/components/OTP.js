import React from 'react'
import './login.css'
import user_light from '../../src/components/assets/user_light.png'
import user_dark from '../../src/components/assets/user_dark.png'
import lock_light from '../../src/components/assets/lock_light.png'
import lock_dark from '../../src/components/assets/lock_dark.png'
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
                
               
                <div className="media-option">
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default OTP
