import React from "react";

import { useState } from "react";
import "./CreateRecipe.css"
import axios from "axios";
import { useEffect } from "react";

function CreateRecipe({loginToken}){

    const [formData,setFormData]=useState({
        id: 19,
        title:"",
        description:"",
        ingredients: "",
        createdAt: "",
        user_tableId:0,
        categories_tableId:0
})

const[user,setUser]=useState({})
const[category,setCategory]=useState({})

useEffect(()=>{
    const url=`https://localhost:7134/api/user_table/${loginToken}`
    axios.get(url)
    .then((response)=>{
        setUser(response.data)
       
    })
    const urli=`https://localhost:7134/api/Category/Category/${1}`
    axios.get(urli)
    .then((response)=>{
        setUser(response.data)
       
    })

  
},[])



  




const handleSubmit= async (e)=>{
setFormData({...formData,id:formData.id+1})
e.preventDefault();
console.log(formData)
try{
    const response=await axios.post('https://localhost:7134/api/recipe_table/createRecipe',{
        id:  formData.id,
        title:formData.title,
        description: formData.description,
        ingredients: formData.ingredients,
        createdAt: "2023-09-20T04:35:35.449Z",
        user_tableId: 1,
        user:user,
        categories_tableId: 1,
        category:category
    });
    console.log(response);
    if (response.status === 200 || 201) {
        
        alert('Added successful');
        
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

    return(
        <div className="containerForm">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="heading">
                        Create Recipe
                    </div>
                    <div>
                        <span>Title</span>
                        <input required type="text" id="title" name="title" value={formData.firstName} onChange={handleChange} />   
                    </div>
                    <div>
                        <span>Description</span>
                        <input required type="textarea" id="description" value={formData.lastName} name="description" onChange={handleChange} />   
                    </div>
                    <div>
                        <span>Ingredients</span>
                        <textarea required type="textarea" id="ingredients" value={formData.email} name="ingredients" onChange={handleChange} ></textarea>   
                    </div>
                    <div>
                        <span>Category</span>
                        <select name="categories_tableId">
                            <option  value={1} onSelect={handleChange}>Apetizer</option>
                            <option value={2} onSelect={handleChange}>Meal</option>
                            <option value={3} onSelect={handleChange}>Dessert</option>
                        </select>   
                    </div>

                    <div>
                        <button> Create</button>
                    </div>
            </form>
        </div>
    )
}

export default CreateRecipe;