import React, { useState } from 'react'
import { Link, Navigate,useNavigate } from 'react-router-dom';
import '../assets/style/Login/LoginArea.scss';
import LoginInputs from '../components/Login/LoginInputs';
import LoginLogo from '../components/Login/LoginLogo';
import axios from 'axios';
import { useEffect} from 'react';
function Login(props) {
  const url = "https://localhost:44380"
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const navigate=useNavigate();
  async function Login() {  
   
    await axios.post(`${url}/api/Account/Login`, {
      email: emailInput,
      password: passwordInput,
    })
      .then(res => {
        localStorage.setItem("token",res.data);  
        props.setUser(localStorage.getItem("token"));
        navigate('/');
        
      })
      .catch(error => console.log(error));
      
  }
  
  
   

  return (
    <div className='login-area'>
        <LoginLogo />
        <LoginInputs
          emailInput={emailInput} passwordInput={passwordInput}
          login={Login} setEmailInput={setEmailInput}
          setPasswordInput={setPasswordInput}
        />

    </div>
  )
}

export default Login
