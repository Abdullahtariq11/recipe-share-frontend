import React from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import { useEffect,useState } from "react";
import './MyRecipeBox.css'
import CreateRecipe from "./CreateRecipe";

function MyRecipeBox({loginToken,userName}){
    const [recipes, setRecipes] = useState([]);
    const [icon,setIcon]=useState(1);

    useEffect(()=>{
        // Define the URL to your backend endpoint
    const apiUrl = `https://localhost:7134/api/recipe_table/api/recipe_table/user/${loginToken}`;
    axios.get(apiUrl)
    .then((response)=>{
        setRecipes(response.data.$values)
        console.log(userName)
    })
    },[]);

    const recipeMy=4;

  
    
    return(
        <div className="recipe-box">
            <div className="RecipeContainer" >
                <ul>
                    <li onClick={()=>setIcon(1)}>My Recipes</li>
                    <li onClick={()=>setIcon(2)}>Create New</li>
                    
                </ul>
            </div>

            <div>
                {
                    icon==1? 
                        <ul className="recipebox">
                        {
                            recipes.map((recipe)=>(
                                <RecipeCard Recipes={recipe} userName={userName} recipeMy={recipeMy}/>
                            ))
                        }
                        </ul>
                    
                    : 
                        <div>
                            <CreateRecipe loginToken={loginToken}/>
                        </div>


                }


            </div>


        </div>
    );
}

export default MyRecipeBox;