import React, { Component, useState } from 'react';
import home from './home';
import "./home";
import { useNavigate  } from "react-router-dom";


function Yes(){
    let navigate=useNavigate();
return (<div>
        <div className="App">
        <header className="App-header">
        <h2>
            Awwwww
        </h2>

        <button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40,float:'right'}} 
            className='btn btn-primary btn-lg m-3' onClick={()=>{navigate("/home")}}>&nbsp;&nbsp; Next &nbsp;&nbsp;</button>
        </header>
        </div>
      </div>
      );
    }

    export default Yes;