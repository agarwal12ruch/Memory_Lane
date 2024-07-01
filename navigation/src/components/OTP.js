import React, { useState } from 'react'
import './login.css'
import user_light from '../../src/components/assets/user_light.png'
import user_dark from '../../src/components/assets/user_dark.png'
import lock_light from '../../src/components/assets/lock_light.png'
import lock_dark from '../../src/components/assets/lock_dark.png'
import { useNavigate } from 'react-router-dom'
const OTP = ({theme,settheme,applyalert}) => {
    const [cotp,setCotp]=useState('')
    const userId = localStorage.getItem('userId');
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response= await fetch("http://localhost:5000/api/auth/verifyotp",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({otp:cotp.otp})
        });
        const data=await response.json();
        console.log(data)
        if(data.success){
           
            localStorage.removeItem('userId');
        navigate("/About")
        console.log(data.authtoken)
        applyalert("Logged in","success");
        }
        else{
            applyalert("Invalid credentials","danger");
        }
        
    }
    const onChange=(e)=>{
        setCotp(e.target.value)
    }
  return (
    <div className='Login'>
      <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>OTP Verification</h1>
                <div className="input-box">
                    <input type="otp" placeholder="Enter OTP" id="otp" name="otp" value={cotp.otp} onChange={onChange} required />
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
