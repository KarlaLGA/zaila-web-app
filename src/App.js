import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'

function App() {

  const artwork = useSelector(state => state.artwork);
  return (
    <div className="App">
      <header className="App-header">
        <p>{artwork.test}</p>
      </header>
    </div>
  );
}

export default App;
