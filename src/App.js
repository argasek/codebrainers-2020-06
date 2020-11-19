import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ['red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass'];
  const styleObject = {
    color: 'green',
    backgroundColor: 'pink'
  };

  const ListItem = props => <li style={props.style}> {props.text} : { props.color }, </li>;

  const mapper = function (color, index) {
    const isIndexEqual2 = index%2 === 1 ;
    const styledListItem = <ListItem style={styleObject} color={color} text="Special color" />;
    const regularListItem = <li>Color name: { color }</li>;
    return isIndexEqual2 ? styledListItem : regularListItem;
  };

  // 2
  const arrayOfColorParagraphs = arr.map(mapper);

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
