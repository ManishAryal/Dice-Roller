import React,{useState} from 'react';
import './index.css';

function App() {
  const[diceNumber,setDiceNumber]=useState(2);
  const[diceNumber2,setDiceNumber2]=useState(4);
    
  const refreshDice=()=>{
    const random= Math.floor(Math.random()*6)+1;
    const random2= Math.floor(Math.random()*6)+1;
    setDiceNumber(random);
    setDiceNumber2(random2);


  }
  return (
    <div>
      <center>
      <img width={300} height={300} src={require(`./assets/${diceNumber}.png`)}></img>
      <img width={300} height={300} src={require(`./assets/${diceNumber2}.png`)}></img>
      <br/>
      <button onClick={()=>refreshDice()} className="button"> Roll </button>
      </center>
    </div>
  );
}

export default App;
