import React from 'react';
import Routing from './routes';
import './App.css';


function App() {
    require('dotenv').config()
    console.log(process.env)
  return (
    <div>
      <Routing />
      </div>
      
  );
}

export default App;
