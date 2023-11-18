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
        <div>
          <button>AC</button>
          <button>DEL</button>
          <button>/</button>
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
        <button>.</button>
        <button>0</button>
        <button>=</button>
        
        </div>
        </form>

        
      </div>

    </div>

  )
}

export default App
