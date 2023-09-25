import React from "react";
import NavbarHome from "./NavbarHome";
import axios from "axios";
import {useState, useEffect } from "react";
import Intro from "./Intro";

import MyRecipeBox from "./MyRecipeBox";
import Footer from "../componentsInitial/Footer";

function MyRecipe({loginToken,setLogin}){

    console.log(loginToken,typeof(loginToken))
    const[user,setUser]=useState({})

    useEffect(()=>{
        const url=`https://localhost:7134/api/user_table/${loginToken}`
        axios.get(url)
        .then((Response)=>{
            setUser(Response.data)
            
        })
    },[])

    const msg= `Welcome ${user.firstName} ${user.lastName} to your Recipe kingdom`

    return(
        <header>
            <NavbarHome islogin={setLogin}/>
            <Intro msg={msg}/>
            <MyRecipeBox loginToken={loginToken} userName={`${user.username}`}/>
            <Footer/>
            
        </header>

    );
}

export default MyRecipe;