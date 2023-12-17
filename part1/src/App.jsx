import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const generateObject = (count) => {
    const obj = {};
    for (let i = 1; i <= count; i++) {
      obj[`${i}`] = 0;
    }
    return obj;
  };
  
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const getRandom = (min, max) => {
    const floatRandom = Math.random()
  
    const difference = max - min
  
    // random between 0 and the difference
    const random = Math.round(difference * floatRandom)
  
    const randomWithinRange = random + min
  
    return randomWithinRange
  }
  const getanec = (val) => {
    console.log(vote);
    val = getRandom(0, anecdotes.length)
    setSelected(val)
  }
  const copy = [...vote]
  const max = Math.max(...vote)
  const index = vote.indexOf(max)
  const votefor = () => {
    console.log(selected);
    // console.log(vote);
    copy[selected] += 1
    setVote(copy)
    
    
  }
  

  return (
    <div>
      {anecdotes[selected]}
      
      <div>
      <button onClick={getanec}>next</button>
      <button onClick={votefor}>vote </button>

      </div>

      <div>
      <h1>anecdotes with most votes</h1>
      <div>
        {anecdotes[index]}
      </div>
      </div>
    </div>
  )
}

export default App