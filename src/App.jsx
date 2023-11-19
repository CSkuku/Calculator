import { useState } from 'react'

import './App.css'

function App() {
  return (
    
    <div className="container">
      <div className="calculator">
        <form action="">
        <div className="displayValue">
          <input type="text"/>
        </div>
        <div className="cal">
          <button className="doubleSize">AC</button>
          <button className="singleSize">DEL</button>
          <button className="singleSize">/</button>
          
        </div>

        <div>
        <button>7</button>
        <button>8</button>
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

        <div>
        <button className="singleSize">.</button>
        <button className="singleSize">0</button>
        <button className="doubleSize">=</button>
        </div>
        
        </form>

        
      </div>

    </div>

  )
}

export default App
