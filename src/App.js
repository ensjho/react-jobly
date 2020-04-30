import React, { useEffect, useState } from 'react';
import Nav from "./Routes/Nav";
import Routes from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './AuthContext';
import { useLocalStorage, getLoggedInUser } from './hooks'
import './App.css';

/**Renders Nav and Routes component; 
 * provide context of value token */
function App() {
  // set state for token

  // todo: revisit this, seems redundant
  const [token, setToken] = useLocalStorage();
  const possibleToken = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState({});
  // check if local storage already has token, update state with token
  useEffect(() => {
    if (possibleToken) {
      setToken(possibleToken);
      async function getUserInfo() {
        setUserInfo( await getLoggedInUser() );
      }
      getUserInfo();
    }
  }, [setToken, possibleToken]);
  

  // todo: either pass userInfo as prop or context, not both
  // todo: we don't need to pass token everywhere, use userInfo
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{token, setToken, userInfo, setUserInfo}}>
          <Nav />
          <Routes userInfo={userInfo} />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
