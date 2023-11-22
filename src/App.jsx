//import { useState } from 'react'

import { useState } from 'react'
import './App.css'

function App() {

  const[value, setValue] = useState("");
  var val = "hello";
  
  /* console.log(value); */

  function handleInput(e){
    console.log(e)
    setValue(e)
  }

  console.log("New state set! Component rerendered. New state/value: ", value)
  console.log("Regular variable is now...", val)

  return (
    <div className="container">
      <div className="calculator">
        <div className="keypad" >
        <div className="displayValue">
          <input type="text" value={value} onChange={(e) => handleInput(e.target.value)}/>
        </div>
        <div className="cal">
          <button className="doubleSize">AC</button>
          <button className="singleSize">DEL</button>
          <button className="singleSize">/</button>
          
        </div>

        <div>
        <button onClick={(e) => {
          handleInput(e.target.value)
          console.log("inline ", e.target.value)
        }}>7</button>
        <button onClick={(e)=>{val = e.target.value}}>8</button>
        <button>9</button>
        <button>*</button>
        </div>

        <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        </div>

        <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        </div>

        <div className="cal">
        <button className="singleSize">.</button>
        <button className="singleSize">0</button>
        <button className="doubleSize">=</button>
        </div>
        
        </div>

        
      </div>

    </div>

  )
}

export default App
