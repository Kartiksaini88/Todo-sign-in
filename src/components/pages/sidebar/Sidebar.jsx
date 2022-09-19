import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { store } from '../../redux/store'
import { Todo } from '../todo/todo'
import './Sidebar.css'

const Sidebar = () => {
    const navigate = useNavigate()
//     const {user} = useSelector((store)=>store.getuser)
// //    const {name , username , email , description} = user[0]
//    console.log(user)
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
   
  return (
    <div className='sidebar-todo-div-flex'>
        <div>
      <div className="padding">
        {user  === null ? <div className='if-not-login-div'>
            <div className='center-div'>
                <button onClick={()=>{
                    navigate('/login')
                }} className='sidebar-btn'>Login</button>
                <div className='hr-div'><hr className='hr' /><span>Or</span><hr className='hr'/></div>
                <button onClick={()=>{
                    navigate('/register')
                }} className="sidebar-btn">Register</button>
            </div>
        </div>:<div className="col-md-8">
        <div className="card"> <img className="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap"/>
            <div className="card-body little-profile text-center">
                <div className="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user" /></div>
                <h3 className="m-b-0">{user[0].name}</h3>
                <p>{user[0].description}</p> <a href="" className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a>
                <div className="row text-center m-t-20">
                    <div className="col-lg-4 col-md-4 m-t-20">
                        <h3 className="m-b-0 font-light">10434</h3><small>Articles</small>
                    </div>
                    <div className="col-lg-4 col-md-4 m-t-20">
                        <h3 className="m-b-0 font-light">{user[0].email}</h3><small>email</small>
                    </div>
                    <div className="col-lg-4 col-md-4 m-t-20">
                        <h3 className="m-b-0 font-light">{user[0].username}</h3><small>username</small>
                    </div>
                </div>
            </div>
        </div>
    </div>}
    {/*  */} 
</div>
</div>
<div className='todo-div'>
<Todo></Todo>
</div>

</div>
   
  )
}

export default Sidebar
