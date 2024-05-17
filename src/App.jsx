import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [state, setState]= useState(0)
  let increment =()=>{
    setState(state+1);
  }
  let decrement =()=>{
    setState(state-1);
  }
  return (<>
  <div style={{display:'flex'}}>
  <button onClick={increment} style={{backgroundColor:'green'}}>+</button>
  <button style={{backgroundColor:'gray'}}>{state}</button>
  <button onClick={decrement}style={{backgroundColor:'red'}}>-</button>
  </div>
  </>)
}

export default App
