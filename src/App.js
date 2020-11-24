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
                new Student('Alicja', 1),
                new Student('Grzegorz', 1),
                new Student('Rafał', 1),
                new Student('Szymon H.', 1),
                new Student('Szymon T.', 1),
            ],
        };
    }

    giveBooze = (clickedStudentIndex) => {
        let students = this.state.students.map(student => student.clone());

        students[clickedStudentIndex].numberOfBoozeUnits++;

        this.setState({ students: students });
    };

    takeBooze = (clickedStudentIndex) => {
        let students = this.state.students.map(student => student.clone());

        students[clickedStudentIndex].numberOfBoozeUnits--;

        this.setState({ students: students });
    };

    addNewStudent = () => {
        let students = this.state.students.map(student => student.clone());
        const randomBoozeUnits = Math.floor(Math.random() * 99) + 1;
        const fullName = 'Anonymous';
        students.push(new Student(fullName, randomBoozeUnits));
        this.setState({ students: students });
    };

    componentDidMount() {
        console.log(this);
    }

    setStudentFullName = (event) => {
        const fullName = event.currentTarget.value;
        console.log(fullName);
    };

    render() {
        const students = this.state.students;

        return (
            <div className="App">

                <h1>List of students</h1>

                <StudentsList
                    students={ students }
                    clicked={ this.state.clicked }
                    giveBooze={ this.giveBooze }
                    takeBooze={ this.takeBooze }
                />
                <p>
                    <label>Full name:</label><br />
                    <input type="text" placeholder="Type in name…" onChange={ this.setStudentFullName } />
                </p>
                <button onClick={ this.addNewStudent }>Add student!</button>
            </div>
        );
    }
}

export default App;
