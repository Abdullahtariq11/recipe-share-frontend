import React from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import { useEffect,useState } from "react";
import "./MyRecipeBox.css"

function RecipeBox(){
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        // Define the URL to your backend endpoint
    const apiUrl = "https://localhost:7134/api/recipe_table/api/recipe_table/GetAll";
    axios.get(apiUrl)
    .then((response)=>{
        setRecipes(response.data.$values)
    })
    },[]);

    

    return(
        <div>
            <ul className="recipebox">
            {
                recipes.map((recipe)=>(
                    <RecipeCard Recipes={recipe}/>
                ))
            }
            </ul>

        </div>
    );
}

export default RecipeBox;