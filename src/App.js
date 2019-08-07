import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke';
import jokesData from './jokesData';
import Meme from './Meme';
function App() {
  const jokesComponents=jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)
  return (
    <div className="App">
        
        {jokesComponents}
        <Meme />
    </div>
  );
}

export default App;
