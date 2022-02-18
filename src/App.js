import React, {useState} from 'react';
import ReactDom from 'react-dom';

import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [addition, setAddition] = useState();
  const [subtraction, setSubtraction] = useState();
  const [multiplication, setMultiplication] = useState();
  const [division, setDivision] = useState();
 
  function add(e){
    e.preventDefault();
    // setAddition(number1 + number2);
    setAddition(parseInt(number1) + parseInt(number2))
  }

  function sub(e){
    e.preventDefault();
    // setSubtraction(parseInt(number1) - parseInt(number2))
    setSubtraction(number1 - number2)
  }

  function mul(e){
    e.preventDefault();
    setMultiplication(number1 * number2);
  }

  function div(e){
    e.preventDefault();
    setDivision(number1 / number2);
  }

  return (
    <div className="App">
      <div className='header'>
      <form>
      <div className='inputs'>
        <label>Number 1 : 
        <input type="number" 
        value={number1}
        onChange={e => setNumber1(e.target.value)}
        style={{marginLeft: "5px"}} />
        
        
        </label> 
        <label>Number 2 :
        <input type="number"
        value={number2}
        onChange={e => setNumber2(e.target.value)} 
        style={{marginLeft: "5px"}} />
        </label>
        </div>
        <div className='buttons'>
         <button onClick={add} style={{marginRight: "5px"}} ><strong>Add</strong></button>
         <button onClick={sub} style={{marginRight: "5px"}}><strong>Subtract</strong></button>
         <button onClick={mul} style={{marginRight: "5px"}}><strong>Multiply</strong></button>
         <button onClick={div} style={{marginRight: "5px"}}><strong>Divide</strong></button>
         </div>
      </form>
      <h3> {number1} + {number2} = {addition}</h3>
      <h3> {number1} - {number2} = {subtraction}</h3>
      <h3> {number1} * {number2} = {multiplication}</h3>
      <h3> {number1} / {number2} = {division}</h3>
      </div>
    </div>

  );
}

export default App;
