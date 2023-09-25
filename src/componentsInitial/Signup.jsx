
import React from "react";
import Footer from "./Footer";
import NavbarLogin from "./NavbarLogin";
import './Signup.css';
import axios from "axios";
import { useState } from "react";

import { Navigate, Link, } from "react-router-dom";



function Signup() {
    const [formData,setFormData]=useState({
                id: 111,
                username:"",
                email: "",
                passwordHash: "",
                firstName: "",
                lastName: "",
                createdAt: ""
    })
    const handleSubmit= async (e)=>{
        setFormData({...formData,id:formData.id+1})
        e.preventDefault();
        try{
            const response=await axios.post('https://localhost:7134/api/user_table/signup',{
                id:  formData.id,
                username:formData.username,
                email: formData.email,
                passwordHash: formData.passwordHash,
                firstName: formData.firstName,
                lastName: formData.lastName,
                createdAt: "2023-09-20T04:35:35.449Z"
            });
    
            if (response.status === 200 || 201) {
                <Navigate to="/"/>
                alert('Sign up successful');
                
              } 
        }
        catch(error){
            if (error.response) {
                if (error.response.status === 401) {
                    alert('Invalid username or password'); // Display a user-friendly message
                } else if (error.response.status === 404) {
                   
                    alert('User not found'); // Display a user-friendly message
                }
              
            } else if (error.request) {
                console.log('Request error:', error.request);
            } else {
                console.log('Error message:', error.message);
            }
        }

        }

        const handleChange=(e)=>{
            const {name,value}=e.target;
           setFormData({...formData,[name]:value}) 
        }

  return (
    <div className="Signup">
        <header>
            <NavbarLogin/>
        </header>
        <div className="containerForm">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="heading">
                    Sign up Form
                </div>
                <div>
                    <span>First Name</span>
                    <input required type="name" id="Fisrtname" name="firstName" value={formData.firstName} onChange={handleChange} />   
                </div>
                <div>
                    <span>Last Name</span>
                    <input required type="name" id="Lastname" value={formData.lastName} name="lastName" onChange={handleChange} />   
                </div>
                <div>
                    <span>Email</span>
                    <input required type="email" id="email" value={formData.email} name="email" onChange={handleChange} />   
                </div>
                <div>
                    <span>User Name</span>
                    <input required minLength={8} maxLength={8} id="user" type="text" value={formData.username} name="username" onChange={handleChange}/>   
                </div>
                <div>
                    <span>Password</span>
                    <input required minLength={4} maxLength={4} type="password" id="pass" value={formData.passwordHash} name="passwordHash"  onChange={handleChange}/>   
                </div>
                <div>
                    <button>  Sign up</button>
                </div>

            </form>
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>
  );
}

export default Signup;