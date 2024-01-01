import { useState } from "react";
import "./App.css";

const operators = ["*", "/", "+", "-"];

function App() {
  const [value, setValue] = useState("");

  const lastChar = value.slice(-1);
  const isLastCharAnOperator = operators.includes(lastChar);
  const opeartorDisabled = isLastCharAnOperator || value === "";

  function handleInput(input) {
    setValue((currentValue) => {
      const lastChar = currentValue.slice(-1);

      if (operators.includes(lastChar) && operators.includes(input)) {
        return currentValue;
      }

      if (input === "." && currentValue === "") {
        return "0.";
      }

      if (input === "." && currentValue.includes(".")) {
        return currentValue;
      }

      if (operators.includes(input)) {
        if (lastChar === ".") {
          return currentValue;
        }
        for (const character of currentValue) {
          if (operators.includes(character)) {
            const [leftHandSide, rightHandSide] = currentValue.split(character);
            const result = calculate(leftHandSide, character, rightHandSide);
            if (isNaN(result)) {
              console.error("Failed to calcualte result", {
                leftHandSide,
                operator: character,
                rightHandSide,
              });
              return currentValue;
            }

            return result + input;
          }
        }
      }

      return currentValue + input;
    });
  }

  //
  function del() {
    const newVal = value.slice(0, value.length - 1);
    setValue(newVal);
  }

  const calculate = (n1, operator, n2) => {
    let result = "";

    if (operator === "+") {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === "-") {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === "*") {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === "/") {
      result = parseFloat(n1) / parseFloat(n2);
    }

    return result;
  };

  function equals() {
    setValue((x) => {
      for (const character of x) {
        if (operators.includes(character)) {
          const [leftHandSide, rightHandSide] = x.split(character);
          if (!leftHandSide || !rightHandSide) {
            return x;
          }

          const result = String(
            calculate(leftHandSide, character, rightHandSide)
          );

          if (isNaN(result)) {
            console.error("Failed to calcualte result", {
              leftHandSide,
              operator: character,
              rightHandSide,
            });
            return x;
          }
          return result;
        }
      }
      return x;
    });
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="keypad">
          <div className="displayValue">
            <input type="text" value={value} />
          </div>
          <div className="cal">
            <button
              className="doubleSize"
              onClick={() => setValue("")}
              disabled={value === ""}
            >
              AC
            </button>
            <button
              className="singleSize"
              onClick={() => del()}
              disabled={value === ""}
            >
              DEL
            </button>
            <button
              value="/"
              className="singleSize"
              onClick={(e) => {
                console.log(e);
                handleInput(e.target.value);
              }}
              disabled={opeartorDisabled}
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
              disabled={opeartorDisabled}
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
              disabled={opeartorDisabled}
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
              disabled={opeartorDisabled}
            >
              +
            </button>
          </div>

          <div className="cal">
            <button
              className="singleSize"
              value="."
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              .
            </button>
            <button
              className="singleSize"
              value="0"
              onClick={(e) => {
                handleInput(e.target.value);
              }}
            >
              0
            </button>
            <button
              className="doubleSize"
              onClick={equals}
              disabled={opeartorDisabled}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
