import React from 'react'
import { useState } from 'react'
import "./errors.css"
import "./Form.css"
import validation from './validation'
 function Form({login}) {
  
    //states
    const [userData,setUserData]=useState({
        username:"",password:""
     })
     const [errors,setErrors]=useState({})
     const [showPassword, setShowPassword] = useState(false)

     const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

     const handleChange =(event)=>{
        const property = event.target.name
        const value = event.target.value
        setUserData({...userData,[property]:value})
        validation({...userData,[property]:value},errors,setErrors)
     }
const submithandler = (event)=>{
event.preventDefault()
login(userData)
}

  return (
    <div className='form'>
        <div className="ball"></div>
        <div className="title-c">
        <h1>Welcome</h1> <span>Back!</span>
        </div>
      <form onSubmit={submithandler} >
        <div>
        <label  htmlFor="username">Username:</label>
        <input  onChange={handleChange}
         value={userData.username} 
         className="email-i" 
         type="text" name='username' 
         placeholder='Escriba su email' /> 
       </div>
       <p className='warning'>{errors.username}</p> 
       <div className='divpass-'>
       <label className='label-pass' htmlFor="password">Password:</label>
        
        <input 
        onChange={handleChange} 
        value={userData.password}
                               //className={errors.password && 'warning'}
         type={showPassword ? 'text' : 'password'}name='password' 
          placeholder='Ingrese su clave'
           className='password-i'/>
           <button className='showpass' type="button" onClick={toggleShowPassword}>
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </button>
              
        </div>

        <p className='warning'>{errors.password}</p> 
      
        <button  className='submit-button'>Login</button>
      </form>
    </div>
  )
}

export default Form