import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Main from './Main';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
