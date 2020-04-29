import React, { useState } from 'react';
import Nav from "./Routes/Nav";
import Routes from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './AuthContext';
import useLocalStorage from './hooks'
import './App.css';

/**Renders Nav and Routes component; 
 * provide context of value token */
function App() {
  const [token, setToken] = useLocalStorage('');

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value ={{token, setToken}}>
          <Nav />
          <Routes />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
