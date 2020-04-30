import {useState} from 'react';
import JoblyApi from './JoblyApi';
import { decode } from 'jsonwebtoken';

// todo: consider calling func more token-related, or make this more generic
// and accept a key too

function useLocalStorage(){
  const initialToken = localStorage.getItem('token') || null;
  const [token, setToken] = useState(initialToken);
  if ( token ) {
    localStorage.setItem('token', token);
  }
  
  return [token, setToken];
}

// todo: this doesn't belong in hooks, move to more appropriate location
// todo: wrap API call in try/catch

async function getLoggedInUser() {
  const initialToken = localStorage.getItem('token') || null;
  if (initialToken) {
    const { username } = decode(initialToken);
    let currUser = await JoblyApi.getUser(username);
    return currUser;

  }
}

// function useLocalStorage(key, initialValue) {
//   // State to store our value
//   // Pass initial state function to useState so logic is only executed once
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       // Get from local storage by key
//       const item = window.localStorage.getItem(key);
//       // Parse stored json or if none return initialValue
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       // If error also return initialValue
//       console.log(error);
//       return initialValue;
//     }
//   });

//   // Return a wrapped version of useState's setter function that ...
//   // ... persists the new value to localStorage.
//   const setValue = value => {
//     try {
//       // Allow value to be a function so we have same API as useState
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       // Save state
//       setStoredValue(valueToStore);
//       // Save to local storage
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       // A more advanced implementation would handle the error case
//       console.log(error);
//     }
//   };

//   return [storedValue, setValue];
// }

export {
  useLocalStorage,
  getLoggedInUser
};