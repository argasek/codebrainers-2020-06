import React from 'react';
import './App.css';
import Student from './models/student';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.students = [
      new Student('Alicja', 30),
      new Student('Grzegorz', 5),
      new Student('Rafał', 1),
      new Student('Szymon H.', 60),
      new Student('Szymon T.', 60),
    ];
  }


  render() {
    const students = this.students;

    return (
      <div>
        <h1>List of students</h1>
      </div>
    );
  }
}

export default App;
