import React from 'react';
import './App.css';
import Student from './models/student';
import StudentsList from './components/studentsList';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log(this);

        this.state = {
            clicked: false,
            students: [
                new Student('Alicja', 30),
                new Student('Grzegorz', 5),
                new Student('Rafał', 1),
                new Student('Szymon H.', 60),
                new Student('Szymon T.', 60),
            ],
        };
    }

    giveBooze = (index) => {
        let students = this.state.students;

        this.setState({
            students: students
        })
        console.log(this.state.students[index].numberOfBoozeUnits++);
    }

    componentDidMount() {
        console.log(this);
    }

    showAlert = () => {
        this.setState({
            clicked: true
        });
    }

    render() {
        const students = this.state.students;

        return (
            <div className="App">

                <h1>List of students</h1>

                <StudentsList students={students} clicked={this.state.clicked} giveBooze={this.giveBooze}/>
                <button onClick={this.showAlert}>Click me!</button>
            </div>
        );
    }
}

export default App;
