import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// PollOption Component for displaying each option
const PollOption = ({ option, count, onVote, index }) => {
  return (
    <div>
      <h3>{option}</h3>
      <p>Votes: {count}</p>
      <button onClick={() => onVote(index)}>Vote</button>
    </div>
  );
};

function App() {
  // useState to manage count votes
  const [pollOptions, setPollOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Rabbit', count: 0 },
  ]);

  // Function to handle Votes
  const handleVote = (index) => {
    const newPollOptions = [...pollOptions];
    newPollOptions[index].count += 1;
    setPollOptions(newPollOptions);
  };

  // Function to get the current leader
  const getLeader = () => {
    const allCounts = pollOptions.map(option => option.count);
    const firstCount = allCounts[0];
  
    const allEqual = allCounts.every(count => count === firstCount);
  
    if (allEqual) {
      return "It's a tie!";
    }
  
    const winner = pollOptions.reduce(
      (max, option) => (option.count > max.count ? option : max),
      pollOptions[0]
    );
    return winner.option;
  };
  

  // MyButton Component (hello button)
  const MyButton = () => {
    const Greet = () => {
      alert('Hi');
    };

    return <button onClick={Greet}>Click Me</button>;
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Pet Poll</h1>
      {pollOptions.map((option, index) => (
        <PollOption
          key={index}
          option={option.option}
          count={option.count}
          onVote={handleVote}
          index={index}
        />
      ))}
      <h2>Current Leader: {getLeader()}</h2>

      <h1>Vite + React</h1>
      <div className="card">
        {/* Remove this part that refers to 'count' */}
        <p> </p>
        <MyButton />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
