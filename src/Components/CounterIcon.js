import React,{useState} from 'react';
import './Counter.css' ;
import CounterButton from './Counter_button';

export default function Counter() {

    const[count,setCount]=useState(0);
  return (
    <div className="counter">
      {count}
      <CounterButton parentState={count} stateChange={setCount}></CounterButton>
    </div>
  )
}
