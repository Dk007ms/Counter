import React from "react"
import "./Counter_button.css"
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";
import reset from "../assets/reset.png";

export default function CounterButton({parentState,stateChange}) {

    const increment=()=>{
        stateChange(parentState+1);
    }
    const decrement=()=>{
        stateChange(parentState-1);
    }
    const resettozero=()=>{
        stateChange(parentState=0);
    }
    

  return (
    <div className="buttons">
       <button className="decrease" onClick={decrement}>
        <img className="decreaseimg" src={minus} alt="minus" />
       </button>
       <button className="reset" onClick={resettozero}>
        <img className="resetimg" src={reset}  alt="reset"/>
       </button>
       <button className="increase" onClick={increment}>
        <img className="increasingimg" src={plus} alt="plus" />
       </button>
    </div>
  )
}
