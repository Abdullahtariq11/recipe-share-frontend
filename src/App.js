import Home from './ComponentsAfter/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './componentsInitial/Login';
import Signup from './componentsInitial/Signup';
import { useState } from 'react';
import MyRecipe from './ComponentsAfter/MyRecipe';
import NavbarHome from './ComponentsAfter/NavbarHome';



function App() {
 
  const [userLogged,setUserLogged]=useState(false)
  const [loginToken,SetloginToken]=useState(0)
  
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login  setLogin={setUserLogged} SetloginToken={SetloginToken}/>} />
          <Route path="/home" element={<Home userLogin={userLogged} setLogin={setUserLogged} />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/recipe' element={<MyRecipe loginToken={loginToken} setLogin={setUserLogged}/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
