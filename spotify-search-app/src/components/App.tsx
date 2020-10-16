import React from 'react';
import '../css/App.css';
import Navbar from "./Navbar";
import Buttons from "./Buttons"

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>This is the app component</h1>
      <Buttons />
    </div>
  );
}

export default App;
