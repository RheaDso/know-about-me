import React, { Component,useState } from 'react';
import { useNavigate  } from "react-router-dom";

function Heart() {
    let navigate = useNavigate();

    return(

        <div className="App">
        <header className="App-header"> 
        <br></br>
        <span><button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40, backgroundColor:"black", color:"white"}} 
               className='btn btn-secondary btn-lg' onClick={()=>{navigate("/home")}}>&nbsp;&nbsp;Click Me&nbsp;&nbsp;</button></span>   
        <div id="heart"></div> 
        </header>
        </div>

       ) 
}

export default Heart;