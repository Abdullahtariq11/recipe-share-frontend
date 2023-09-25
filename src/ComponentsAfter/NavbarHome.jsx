import React from "react";
import './NavbarHome.css';
import { Navigate, Link, } from "react-router-dom";


function NavbarHome(props){

    const HandleClick=()=>{
        props.islogin(false);
        
    }
    return(
        <div className="Navbar">
            <ul className="container">
                <li className="logo-container">
                    <img src="https://th.bing.com/th/id/R.776c6de2295e95d9f13382849b1f7bdb?rik=odEjkqpDKN2MIQ&riu=http%3a%2f%2ffoodtalk4you.com%2fwp-content%2fuploads%2f2017%2f01%2fRecipes-Banner-1024x576.jpg&ehk=%2ff4Gd6YA30jRfz9549Qi6itO0j%2fyibePnoL%2b3tOVvxo%3d&risl=&pid=ImgRaw&r=0" alt="logo"/>
                </li>
                <li>
                    <h1>Recipe World</h1>
                </li>
                <div className="right-link">
                    <li >
                        <Link  className="home" to="/home">Home </Link>
                    </li>
                    <li >
                        <Link className="recipe" to="/recipe">My Recipe </Link>
                    </li>

                    <li onClick={HandleClick}>
                        <Link to="/"  className="signout">Sign Out </Link>
                    </li>

                </div>


            </ul>

        </div>
    )
};

export default NavbarHome;