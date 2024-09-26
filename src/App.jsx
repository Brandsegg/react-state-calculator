import "./App.css"
import { useState } from "react"

function App() {

  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState(0)


  const clickedFirstNum = (num) => {
    if(firstNum === 0 && num === 0){
      setFirstNum(0)
    }
    setFirstNum(Number(`${firstNum}${num}`))
    return num
  }

  const clickedSecondNum = (num) => {
    if(secondNum === 0 && num === 0){
      setSecondNum(0)
    }
    setSecondNum(Number(`${secondNum}${num}`))
    return num
  }

  const clickedOperator = (op) => {
    setOperator(op)
  }

  const calculate = () => {
    let ans = 0
    if(operator  === '+'){
      ans = firstNum + secondNum
    }
    else if(operator  === '-'){
      ans = firstNum - secondNum
    }
    else if(operator  === '*'){
      ans = firstNum * secondNum
    }
    else if(operator  === '÷'){
      ans = firstNum / secondNum
    }
    setResult(ans)
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers">
          <button onClick={() => clickedFirstNum(1)}>1</button>
          <button onClick={() => clickedFirstNum(2)}>2</button>
          <button onClick={() => clickedFirstNum(3)}>3</button>
          <button onClick={() => clickedFirstNum(4)}>4</button>
          <button onClick={() => clickedFirstNum(5)}>5</button>
          <button onClick={() => clickedFirstNum(6)}>6</button>
          <button onClick={() => clickedFirstNum(7)}>7</button>
          <button onClick={() => clickedFirstNum(8)}>8</button>
          <button onClick={() => clickedFirstNum(9)}>9</button>
          <button onClick={() => clickedFirstNum(0)}>0</button>
          <button onClick={() => clickedFirstNum(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => clickedOperator('+')}>+</button>
          <button onClick={() => clickedOperator('-')}>-</button>
          <button onClick={() => clickedOperator('*')}>*</button>
          <button onClick={() => clickedOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
          <button onClick={() => clickedSecondNum(1)}>1</button>
          <button onClick={() => clickedSecondNum(2)}>2</button>
          <button onClick={() => clickedSecondNum(3)}>3</button>
          <button onClick={() => clickedSecondNum(4)}>4</button>
          <button onClick={() => clickedSecondNum(5)}>5</button>
          <button onClick={() => clickedSecondNum(6)}>6</button>
          <button onClick={() => clickedSecondNum(7)}>7</button>
          <button onClick={() => clickedSecondNum(8)}>8</button>
          <button onClick={() => clickedSecondNum(9)}>9</button>
          <button onClick={() => clickedSecondNum(0)}>0</button>
          <button onClick={() => clickedSecondNum(0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
