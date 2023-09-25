
import React from "react";
import Footer from "../componentsInitial/Footer";
import NavbarHome from "./NavbarHome";
import { Navigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import RecipeBox from "./RecipeBox";
import Intro from "./Intro";


function Home(props) {

  const msg="Welcome to our vibrant recipe sharing community, where culinary creativity knows no bounds!"
 
  if (props.userLogin===true) {
    return (
      <div className="Home-container">
        <header>
          <NavbarHome islogin={props.setLogin} />
        </header>
              <Intro msg={msg}/>
             <RecipeBox/>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
    
  }

  if(props.userLogin===false){
    
    return (
      <Navigate to="/" />
      
    );
  }

}

export default Home;
