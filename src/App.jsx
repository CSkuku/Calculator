import { useState } from 'react'
import './App.css'
 
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const operators = ["*", "/", "+", "-"]
 
function isValid(char){
  if(!numbers.includes(char) && !operators.includes(char)){
    console.warn("Stoπ that. There are no letters in mathematics!")
    return false
  }
  return true
}
 
function add(c){
  return Number(c.first) + Number(c.last)
}
 
function subtract(c){
  return Number(c.first) - Number(c.last)
}
 
function multiply(c){
  return Number(c.first) * Number(c.last)
}
 
function divide(c){
  return Number(c.first) / Number(c.last)
}
 
function App() {
 
  const[value, setValue] = useState([]);
  const[result, setResult] = useState();
  const[displayCalc, setDisplayCalc] = useState([]);
 
  function handleInput(input){
    // setValue(input)
    setValue([...value, input])
  }
 
  function handleScreenInput(input){  
    const lastInputChar = [...input][[...input].length - 1]
 
    if(isValid(lastInputChar)){
      setValue([...value, lastInputChar])
    }    
  }
 
  function del(){
    const newValue = [...value]
    newValue.pop()
    setValue(newValue)
  }
 
  console.log("New state set! ", value)
 
  function formatNumbers(){
    //TODO: Separate characters into numbers and operators in a list.
    //Then, add/subtract/divide/multiply the numbers in the list depending
    //the operators between them
    //e.g. toBeCalculated = [17812, +, 47, *, 11, -, 10000]
 
    let calculation = []
    let tempVal = ""
 
    debugger
    value.forEach((char)=>{
   
      debugger
      if(numbers.includes(char)){
        tempVal += char
        return
      }
     
      if(operators.includes(char)){
        calculation.push(tempVal)
        tempVal = ""
        calculation.push(char)
        return
      }
    })
 
    if(tempVal.length > 0){
      calculation.push(tempVal)
      tempVal = ""
    }
 
    calculation.forEach((e)=>{
     
    })
  }
 
  return (
    <div className="container">
      <div className="calculator">
        <div className="keypad" >
        <div className="displayValue">
          <input type="text" placeholder={result} value={value} onChange={(e) => handleScreenInput(e.currentTarget.value)}/>
          <div></div>
        </div>
        <div className="cal">
          <button className="doubleSize" onClick={() => setValue([])}>AC</button>
          <button className="singleSize" onClick={() => del()}>DEL</button>
          <button className="singleSize">/</button>
        </div>
 
        <div>
        <button value="7" onClick={(e) => {handleInput(e.target.value)}}>7</button>
        <button value="8" onClick={(e) => {handleInput(e.target.value)}}>8</button>
        <button value="9" onClick={(e) => {handleInput(e.target.value)}}>9</button>
        <button>*</button>
        </div>
 
        <div>
        <button value="4" onClick={(e) => {handleInput(e.target.value)}}>4</button>
        <button value="5" onClick={(e) => {handleInput(e.target.value)}}>5</button>
        <button value="6" onClick={(e) => {handleInput(e.target.value)}}>6</button>
        <button>-</button>
        </div>
 
        <div>
        <button value="1" onClick={(e) => {handleInput(e.target.value)}}>1</button>
        <button value="2" onClick={(e) => {handleInput(e.target.value)}}>2</button>
        <button value="3" onClick={(e) => {handleInput(e.target.value)}}>3</button>
        <button >+</button>
        </div>
 
        <div className="cal">
        <button className="singleSize">.</button>
        <button className="singleSize" value="0" onClick={(e) => {handleInput(e.target.value)}}>0</button>
        <button className="doubleSize" onClick={()=>formatNumbers()}>=</button>
        </div>
       
        </div>
 
       
      </div>
 
    </div>
 
  )
}
 
export default App
 

