import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import User from './components/User';


function App() {
  return (
    <div className="App">
      

     <User />
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
