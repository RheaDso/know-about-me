import { useState } from "react";
import { activity } from "./activity";
import { useNavigate  } from "react-router-dom";

export default function Page3() {
    let navigate=useNavigate();
  const [checkedState, setCheckedState] = useState(
    new Array(activity.length).fill(false)
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
          return sum + activity[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div className="App1">
      <h4>What is my all time favorite series?</h4>
      <ul className="activity-list">
        {activity.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="activity-list-item">
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
          <div className="activity-list-item">
            {checkedState ? "" : "The correct answer is The Vampire Diaries"}
            {/* <div className="right-section">{getFormattedPrice(total)}</div> */}
            <br></br>
            <button style={{fontWeight:'bold',padding:5, width:"43%", border:"none", backgroundColor:"#003166"}} 
               className='btn btn-primary btn-m' onClick={()=>{navigate("/last")}} >&nbsp; Next &nbsp;</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
