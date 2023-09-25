import React, { useEffect } from "react";
import "./RecipeCard.css"

function RecipeCard({ Recipes,recipeMy,userName }){

    useEffect(()=>{

    },[])
  
    return(
        <div className="Container">
            <ul>
                
                    <li key={Recipes.id }>
                        <h3>{Recipes.title}</h3>
                        <p>
                            <span className="titleDes">
                            Description: <br/> 
                            </span>
                            {Recipes.description}
                        </p>
                        <p>
                            <span className="titleDes">
                                Ingredients: <br/> 
                            </span>
                            {Recipes.ingredients}
                        </p>
                        <p>
                            <span className="titleDes">
                            Created At:<br/> 
                            </span>
                            {Recipes.createdAt}
                        </p>
                        
                        <p>
                            <span className="titleDes">
                            Created By:<br/> 
                            </span>
                            {recipeMy==4? userName :Recipes.user.username}
                        </p>
                        <p>
                            <span className="titleDes">
                            Category:<br/> 
                            </span>
                           
                        </p>
                    </li>
                     
                    


            </ul>
        </div>
    
    );
}
export default RecipeCard;