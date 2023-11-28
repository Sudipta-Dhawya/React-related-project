// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App(){
  const [count,setcount] = useState(0)
  // useEffect(()=>{
  //  console.warn("useEffect")
  // })
  return (
  <div className='App'>
    <h1>useEffect in React {count}</h1>
    <button onClick={()=>setcount(count+1)}>Update Counter</button>
  </div>
  );
}
export default App;
 