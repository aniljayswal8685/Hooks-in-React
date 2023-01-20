import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [count,setCount]=useState(0)
  return (
    <div>
      <h1>Hooks in functional Component {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button> 
      <br></br>
      <br></br>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
     
    </div>
  );
}
