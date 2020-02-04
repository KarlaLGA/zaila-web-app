import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './views/Home';
import ListArtworks from './views/Artworks/ListArtworks';
import Create from './views/Artworks/Create';

function App() {

  return (

    <BrowserRouter>
      <main className="app">
        <Route exact path="/" component={ Home }/>
        <Route path="/artworks" component={ ListArtworks }/>
        <Route path ="/createArtwork" component={ Create }/>
      </main>

    </BrowserRouter>
      
  );
}

export default App;
