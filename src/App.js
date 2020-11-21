import React from 'react';
import './App.css';
import Student from './models/student';
import StudentsList from './components/studentsList';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(this);
    this.students = [
      new Student('Alicja', 30),
      new Student('Grzegorz', 5),
      new Student('Rafał', 1),
      new Student('Szymon H.', 60),
      new Student('Szymon T.', 60),
    ];
    this.clicked = false;
  }

  componentDidMount() {
    console.log(this);
  }

  showAlert = () => {
    this.clicked = true;
    console.log(this.clicked);
  }

  render() {
    const students = this.students;
    console.log(this);
    return (
      <div className="App">
        <h1>List of students</h1>

        <StudentsList students={students} clicked={this.clicked}/>
        <button onClick={this.showAlert}>Click me!</button>
      </div>
    );
  }
}

export default App;
