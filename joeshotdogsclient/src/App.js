import React from 'react';
import Routing from './routes';
import Navbar from './components/Navbar';
import './App.css';


function App() {
    require('dotenv').config()
    console.log(process.env)
  return (
    <div>
      <Navbar />
      <Routing />
      </div>
      
  );
}

export default App;
