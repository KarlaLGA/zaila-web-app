import React from 'react';
import { useSelector } from 'react-redux';

import Artwork from './views/Artwork';

function App() {

  const artwork = useSelector(state => state.artwork);
  return (
    <div className="App">
      <header className="App-header">
        <p>{artwork.test}</p>
        <Artwork/>
      </header>
    </div>
  );
}

export default App;
