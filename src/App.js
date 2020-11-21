import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.PureComponent {

  componentDidMount() {
    console.log('App was mounted');
  }

  render() {
    const arr = ['red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass'];
    const styleObject = {
      color: 'green',
      backgroundColor: 'pink'
    };

    const ListItem = props => <li style={props.style}>{props.text}: { props.color }</li>;

    const mapper = function (color, index) {
      const isIndexEven = index % 2;
      const evenListItem = <ListItem style={styleObject} color={color} text="Special color" />;
      const oddListItem = <li color={color}>{`"I'm Groot!" Color name: ${color}`}</li>;
      return isIndexEven ? evenListItem : oddListItem;
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
}


// function App() {
//   const arr = ['red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass'];
//   const styleObject = {
//     color: 'green',
//     backgroundColor: 'pink'
//   };
//
//   const ListItem = props => <li style={props.style}>{props.text}: { props.color }</li>;
//
//   const mapper = function (color, index) {
//     const isIndexEven = index % 2;
//     const evenListItem = <ListItem style={styleObject} color={color} text="Special color" />;
//     const oddListItem = <li color={color}>{`"I'm Groot!" Color name: ${color}`}</li>;
//     return isIndexEven ? evenListItem : oddListItem;
//   };
//
//   // 2
//   const arrayOfColorParagraphs = arr.map(mapper);
//
//   return (
//     <div>
//       <h1>Hej!</h1>
//       <p>Ala ma kota</p>
//       <ul>
//         {
//           arrayOfColorParagraphs
//         }
//       </ul>
//     </div>
//   );
// }

export default App;
