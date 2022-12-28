import { useState } from "react";
import { fun } from "./fun";
import { useNavigate  } from "react-router-dom";



export default function Page1() {
    let navigate=useNavigate();
  const [checkedState, setCheckedState] = useState(
    new Array(fun.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    setCheckedState(!checkedState);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    // setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + fun[index].price;
        }
        return sum;
      },
    );

    setTotal(totalPrice);
  };

  return (
    <div className="App1">
      <h4>Which is my favorite pet?</h4>
      <ul className="fun-list">
        {fun.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="fun-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                {/* <div className="right-section">{getFormattedPrice(price)}</div> */}
              </div>
            </li>
          );
        })}
        <li>
          <div className="fun-list-item">
            {checkedState ? "" : "The correct answer is Cat"}
            {/* <div className="right-section">{getFormattedPrice(total)}</div> */}
            <button style={{fontWeight:'bold', backgroundColor:"#b258dc", border:"none"}} 
               className='btn btn-primary btn-m' onClick={()=>{navigate("/Page2")} } >&nbsp; Next &nbsp;</button>
          </div>
        </li>
      </ul>
      
      <div class='container-cute'>
  <div id='l-ball' class='ball'>
    <div class='face face-l'>
      <div class='eye eye-l'></div>
      <div class='eye eye-r'></div>
      <div class='mouth'></div>
    </div>
  </div><div id='r-ball' class='ball'>
    <div class='face face-r'>
      <div class='eye eye-l eye-r-p'></div>
      <div class='eye eye-r eye-r-p'></div>
      <div class='mouth mouth-r'></div>
      <div class='kiss-m'>
        <div class='kiss'></div>
        <div class='kiss'></div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
