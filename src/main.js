import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import hi from "../src/components/img/hi.gif";

function Main() {
    let navigate = useNavigate();
    const [password,setPassword] = useState();
        
    if (password == 'rhea' ) {
        return(
            <div className='App'>
                <header className='App-header'>
                <br></br>
                    <h1>Know More About Me</h1>
                    <br></br>
                    <span><button style={{padding:20, fontWeight:'bold'}}
                    className='btn btn-primary btn-lg m-3' onClick={()=>{navigate("/Heart")}}>Click Here</button>   
                    </span>
                </header>
            </div>
        )
    }
    else
    {
        return(
            <div className="container-passcode">
                <h3 className="text-center my-5">Enter Password</h3>
                <input type="text" className="form-control" placeholder="Password" style = {{borderBottomWidth : 5, borderBlockColor : "#FFEF00"}} onChange={e => setPassword(e.target.value)}/>
                <img src={hi}></img>
            </div>
        )
    }
}
export default Main;
