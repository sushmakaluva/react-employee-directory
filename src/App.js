import React from 'react';
import './App.css';
import Header from './Components/Header';
import Table from './Components/Table';
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Table />
    </div>
  );
}

export default App;
