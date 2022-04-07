import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Header from "./Components/Header.js"
import Votes from "./Components/Votes.js"
import Anecdote from "./Components/Anecdote.js"

function App() {

  // use states
  const [selected, setSelected] = useState(0)
  let ary = Array(7).fill(0)
  const [votes, setVotes] = useState(ary)


  const updateSelect = () => {
    // generate random number
    let random = Math.floor(Math.random() * 6)

    // change state of selected
    setSelected(random)
  }


  const vote = (selected) => {
    let newvotes = [...votes]
    newvotes[selected] += 1
    setVotes(newvotes)
  }


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  return (
    <>
      <Header title="Anecdote of the day" />
      <Anecdote item={anecdotes[selected]} />
      <Votes no_of_votes={votes[selected]} />
      <button onClick={() => vote(selected)}>Vote</button>
      <button onClick={updateSelect}>Next anecdote</button>

      <Header title="Anecdote with most votes" />
      <Anecdote item={anecdotes[votes.indexOf(Math.max(...votes))]} />
      <Votes no_of_votes={Math.max(...votes)} />

    </>
  );
}

export default App;
