import { useNavigate  } from "react-router-dom";
import yay from "./img/yay.gif";

function Last() {
    let navigate = useNavigate();

    return(
        <div className="App">
            <header className="App-header">
            <br></br>
                <h1>The End</h1>
                <br></br>
                <img src={yay} height="250"></img>
                <br></br>
                <h4>Bye!</h4> 
                <br></br>
            </header>
        </div>
    )
}

export default Last;