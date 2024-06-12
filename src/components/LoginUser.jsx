import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const LoginUser = () => {
        const [data,changeData]=useState({
         
                     "username":"",
                     "password":""
        })
     
        const inputHandler=(event)=>{
         changeData({...data,[event.target.name]:event.target.value})
        }
     
        const readValue=()=>{
         console.log(data)
         axios.post("http://localhost:8086/login",data).then(
             (response)=>{
                 console.log(response.data)
                 if (response.data.status=="success") {
                     alert("success")
                 } else {
                     alert("error")
                 }
             }
         )
        }
  return (
    <div>
        
        <div className="container">
            <h3 align="center">SIGN UP</h3>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="card" >
                    <div class="card-body">

                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">UserName</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="" id="" className="form-control" />
                        </div>
                        
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">LOGIN</button>
                            
                        </div>
                        <p> new users click here.. <Link to ="/add">Signup</Link></p>
                    </div>
             </div>
             </div>
                </div>
            </div>
        </div>
  )
  
}

export default LoginUser