import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'

const AddUser = () => {
   const [data,changeData]=useState({
    "name":"",
                "dob":"",
                "bloodgroup":"",
                "mobile":"",
                "address":"",
                "pincode":"",
                "district":"",
                "place":"",
                "email":"",
                "username":"",
                "password":"",
                "cpswd":""
   })

   const inputHandler=(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
   }

   const readValue=()=>{

    console.log(data)
    axios.post("http://localhost:8086/",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("success")
            } else {
                alert(Error)
            }
        }
    )
   }
  return (
    <div>
        <div className="container">
            <h2 align="center">USER</h2>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date of Birth</label>
                            <input type="text" className="form-control" name='' value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Blood Group</label>
                            <select  id="" className="form-control" name='bloodgroup' value={data.bloodgroup} onChange={inputHandler}>
                                <option value="A +ve"></option>
                                <option value="A -ve"></option>
                                <option value="B +ve"></option>
                                <option value="B -ve"></option>
                                <option value="AB +ve"></option>
                                <option value="AB -ve"></option>
                                <option value="o +ve"></option>
                                <option value="O -ve"></option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea  id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Pincode</label>
                            <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">District</label>
                            <select  id="" className="form-control" name='district' value={data.district} onChange={inputHandler}>
                                <option value="Trivandrum">Trivandrum</option>
                                <option value="Kollam">Kollam</option>
                                <option value="Pathanamthitta">Pathanamthitta</option>
                                <option value="Alappuzha">Alappuzha</option>
                                <option value="Kottayam">Kottayam</option>
                                <option value="Idukki">Idukki</option>
                                <option value="Ernakulam">Ernakulam</option>
                                <option value="Thrisur">Thrisur</option>
                                <option value="Palakkad">Palakkad</option>
                                <option value="Malapuram">Malapuram</option>
                                <option value="Kozhikode">Kozhikode</option>
                                <option value="Wayanad">Wayanad</option>
                                <option value="Kannur">Kannur</option>
                                <option value="Kasargod">Kasargod</option>
                            </select>
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Place</label>
                            <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                            <input type="password"  id="" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label"name='cpswd'>Confirm Password</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser