import { useState } from "react";
import "./App.css";

/* const numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ",",
  ".",
  "",
]; */
const operators = ["*", "/", "+", "-"];

function App() {
  const [value, setValue] = useState("");

  /* function handleInput(input) {
    const v = value + input;
    setValue(v);
  } */

  function handleInput(input) {
    console.log(input);

    setValue((currentValue) => {
      const lastChar = currentValue.slice(-1);
      console.log(lastChar);
      console.log(currentValue);

      if (operators.includes(lastChar) && operators.includes(input)) {
        console.log("One operator at a time, please.");
        return currentValue;
      }
      console.log(currentValue + input);
      return currentValue + input;
    });
  }

  function del() {
    const newVal = value.slice(0, value.length - 1);
    setValue(newVal);
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="keypad">
          <div className="displayValue">
            <input type="text" value={value} />
          </div>
          <div className="cal">
            <button className="doubleSize" onClick={() => setValue("")}>
              AC
            </button>
            <button className="singleSize" onClick={() => del()}>
              DEL
            </button>
            <button
              value="/"
              className="singleSize"
              onClick={(e) => {
                console.log(e);
                handleInput(e.target.value);
              }}
            >
              /
            </button>
          </div>

          <div>
            <button
              value="7"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              7
            </button>
            <button
              value="8"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              8
            </button>
            <button
              value="9"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              9
            </button>
            <button
              value="*"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              *
            </button>
          </div>

          <div>
            <button
              value="4"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              4
            </button>
            <button
              value="5"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              5
            </button>
            <button
              value="6"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              6
            </button>
            <button
              value="-"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              -
            </button>
          </div>

          <div>
            <button
              value="1"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              1
            </button>
            <button
              value="2"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              2
            </button>
            <button
              value="3"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              3
            </button>
            <button
              value="+"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              +
            </button>
          </div>

          <div className="cal">
            <button className="singleSize">.</button>
            <button
              className="singleSize"
              value="0"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              0
            </button>
            <button className="doubleSize" onClick={() => calculate()}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
