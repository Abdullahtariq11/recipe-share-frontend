import './Login.css'
import { useState,useEffect } from "react";
import axios from "axios";
import '../App.css';
import Body from './Body';
import Footer from './Footer';
import { Navigate, Link, } from "react-router-dom";
import NavbarLogin from './NavbarLogin';






function Login(props){
    const[formData,setFormData]=useState({username:"",password:""});
    const[islogin,setLogin]=useState(false);
  


    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('https://localhost:7134/api/user_table/login',{
                username:formData.username,
                passwordHash: formData.password,

            });
            
            /*const response = await fetch('https://localhost:7134/api/user_table', {
                method: 'POST',npm
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username: formData.username,
                  passwordHash: formData.password
                })
              });*/
    
            if (response.status === 200) {
                alert(response.data.toString());
                setLogin(true);
                props.setLogin(true);
                props.SetloginToken(parseInt(response.data));
                console.log(response.data);
                

            
              
 // Redirect to the Home page
                // Redirect or perform actions for authenticated user
              } 
        }
        catch(error){
            if (error.response) {
                if (error.response.status === 401) {
                    alert('Invalid username or password'); // Display a user-friendly message
                } else if (error.response.status === 404) {
                   
                    alert('User not found'); // Display a user-friendly message
                }
                props.setLogin(false);
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

 


    return(
        <div className="App">
        <header className="App-header">
          <NavbarLogin/>
          
        </header>
        
        
          <Body/>
         
         
          <div className="login-form">
            
            <form onSubmit={(e)=>handleSubmit(e)}>
                
                <div className="username">
                    <span>
                        User name: 
                    </span>
                    <input type="text" name="username" required minLength={8} value={formData.username} onChange={handleChange} id="user"placeholder="user name"/>
                </div>
                <div className="password">
                    <span>
                        Password: 
                    </span>
                    <input type="password" minLength={4} required value={formData.password} onChange={handleChange} maxLength="4"name="password" id="pass"placeholder="password"/>
                </div>
                <div className="login-btn">
                    <button>Login</button>
                    {islogin && <Navigate to="/home"/>}
                </div>
                <div className="signUp-btn">
                    <button type='button'>
                        <Link to="/signup" className="sign-up-link" >Sign Up</Link>
                    </button>
                </div>
            </form>
        </div>
        
     
        
        <footer>
          <Footer/>
        </footer>
      </div>

    )
}

export default Login;