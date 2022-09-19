import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { register } from '../../redux/RegisterReducer/Register-action'
import { store } from '../../redux/store'
import './Register.css'

const Register = () => {
    const [form , setform ] = useState({})
    const reuder = store.getState()
    const [count , setcount] = useState(0)
    const {message,error} = useSelector((store)=>store.register)
    console.log(message)
    const navigate = useNavigate()
    const dispatch = useDispatch()
 
    const handleChange = (e)=>{
         const {name , value } = e.target

         setform({
            ...form,
            [name]:value
         })
    }

    const handleSubmit = (e)=>{
       e.preventDefault()
       
      dispatch(register(form)) 
      if(count==0){
        if(message.error==false){
          navigate('/login')
          return;
        }
        else if(message.error){
            alert("User Already Exists")
            return
        }
      }
      
      

    }
  return (
    <div className='register-div'>
        <form action="" className='register-form' onSubmit={handleSubmit}>
          <h1 className='register-heading'>Register</h1>
            <label htmlFor="" className='resgister-label'>👨‍💻 Name </label>
            <input required={true} onChange={handleChange} type="text" name="name" className='name' placeholder='Whats Your Name..?'/>
            
            <label htmlFor="" className='resgister-label'>✉️ Email</label>
            <input required={true} onChange={handleChange} type="email" name="email" className='email' placeholder='Enter Email'/>
            
            <label htmlFor="" className='resgister-label'>🔑 Password</label>
            <input required={true} onChange={handleChange} type="password" name="password" className='password' placeholder='Enter Password'/>
            
            <label htmlFor="" className='resgister-label'>👤 UserName</label>
            <input required={true} onChange={handleChange} type="text" name="username" className='username' placeholder='Write Your UserName'/>
            
            <label htmlFor="" className='resgister-label'>☎️ Number</label>
            <input required={true} onChange={handleChange} type="number" name="mobile" className='number' placeholder='Enter Your Number'/>
            
            <label htmlFor=""className='resgister-label'>✍️ Description</label>
            <input required={true} onChange={handleChange} type="description" name="description" className='description' placeholder='Write the description'/>

            <div className='btn-div'>
                <input type="submit" className='pointer' value={"Register"} /> 
                <input type="submit" className='pointer' onClick={()=>{
                    navigate('/login')
                }} value={"Login"} /> 
            </div> 
        </form>
    </div>                                   
  )
}

export default Register
