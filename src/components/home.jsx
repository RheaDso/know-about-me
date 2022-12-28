import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { colors } from "./colors";

export default function Home() {
    let navigate=useNavigate();
  const [checkedState, setCheckedState] = useState(
    new Array(colors.length).fill(false)
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
          return sum + colors[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div className="App1">
      <h4>What is my favourite color?</h4>
      <ul className="colors-list">
        {colors.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="colors-list-item">
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
              </div>
            </li>
          );
        })}
        <li>
          <div className="colors-list-item">
            {checkedState ? "" : "The correct ans is blue!"}
            <button style={{fontWeight:'bold', width:"40%", backgroundColor:"#00c5cd", border: "none"}} 
               className='btn btn-primary btn-m' onClick={()=>{navigate("/Page1")}} >&nbsp; Next &nbsp;</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
