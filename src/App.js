import "./App.css";
import {useState, useEffect} from "react";

// const Person = (props) => {
//   return (
//     <div>
//       <h1>First Name: {props.firstName}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h2>Age: {props.age}</h2>
//     </div>
//   );
// };

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
   alert('You have changed the counter to ' + count);
  },[count]);
  return (
    <div className="App">
      <button onClick={()=> setCount((prevCount)=> prevCount - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount((prevCount)=>prevCount+1)}>+</button>
    </div>
  );
};

export default App;
