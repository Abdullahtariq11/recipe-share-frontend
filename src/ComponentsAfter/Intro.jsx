import React from "react";
import './Intro.css'

function Intro({msg}){

    return(

        <div className="Intro">
            <p>{msg}</p>
        </div>
    )
};

export default Intro;