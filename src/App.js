import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ['red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass'];
  const styleObject = {
    color: 'green',
    backgroundColor: 'pink',
  };

const arrayOfColorParagraphs = arr.map((color, index) => index % 2 != 0 ? <li style={styleObject}>{color}</li> : <li>{' I am Groot ' + color}</li>);


  return (
    <div>
      <h1>Hej!</h1>
      <p>Ala ma kota</p>
      <ul>
        {
          arrayOfColorParagraphs
        }
      </ul>
    </div>
  );
}

export default App;
