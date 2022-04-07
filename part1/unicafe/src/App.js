import logo from './logo.svg';
import './App.css';
import Button from "./Button.js"
import Statistics from "./Statistics.js"
import {useState} from "react"

function App() {

  const [good,setGood]=useState(0)
  const [bad,setBad]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [all,setAll]=useState(0)

  const handleGood= () => {
    setGood(good+1)
    setAll(all+1)
  }

  const handleBad= () => {
    setBad(bad+1)
    setAll(all+1)
  }

  const handleNeutral= () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }

  let avg=((good - bad)/all).toFixed(1)
  let positive=`${(good/all*100).toFixed(1)}%`

  
  return (
    <>
    <h1>give feedback</h1>
    <Button title="good" action={handleGood}/>
    <Button title="neutral" action={handleNeutral}/>
    <Button title="bad" action={handleBad}/>
    <h1>statistics</h1>
    <Statistics good={good} bad={bad} neutral={neutral} all={all} avg={avg} positive={positive}/>
   

    </>
  );
}

export default App;
