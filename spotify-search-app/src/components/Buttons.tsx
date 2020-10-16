import React from 'react';
import relatedArtistsFunction from '../API/relatedArtists'

function handleClick(event: any) {
  relatedArtistsFunction();
  console.log("it ran");
}

function Buttons() {
  return (
    <div className="App">
      <button onClick={handleClick}>Click To Log</button>
      <button>Button2</button>
      <button>Button3</button>
    </div>
  );
}

export default Buttons;
