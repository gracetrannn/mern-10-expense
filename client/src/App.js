import React from 'react';
import ExpenseTracker from './components/ExpenseTracker';
import './App.css'

const App = () => {
  const isLinkActive =
    (path) =>
      window.location.pathname === path;
  return (

    <ExpenseTracker />


  );
}

export default App;
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/