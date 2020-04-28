import React from 'react';
import Nav from "./Routes/Nav";
import Routes from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// TODO: GET a doc string
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
