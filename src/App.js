import React from 'react';
import './App.css';
import Student from './models/student';
import StudentsList from './components/studentsList';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isFullNamePristine: true,
            clicked: false,
            students: [
                new Student('Alicja', 1),
                new Student('Grzegorz', 1),
                new Student('Rafał', 1),
                new Student('Szymon H.', 1),
                new Student('Szymon T.', 1),
            ],
            fullName: "",
        };
    }
    getInputClassName = () => {
         return (this.hasInputError() && !this.state.isFullNamePristine) ? "has-error" : ""
    }

    hasInputError = () => !(this.state.fullName.trim()!=="");

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
        const fullName = this.state.fullName.trim();
        students.push(new Student(fullName, randomBoozeUnits));
        this.setState({ students: students });
    };

    // componentDidMount() {
    //     console.log(this);
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log(this.state);
        if (prevState.fullName !== this.state.fullName){
           this.setState({isFullNamePristine: false});
        }
    }

    setStudentFullName = (event) => {
        const fullName = event.currentTarget.value;
        console.log(fullName);
        this.setState({ fullName })
    };

    removeStudent = (studentIndex) => {
        const students = this.state.students.filter((student, index) => {
            return !(index === studentIndex);
        })
        this.setState({ students: students });
    }

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
                    removeStudent={this.removeStudent}
                />
                <p>
                    <label>Full name:</label><br />
                    <input type="text"
                           placeholder="Type in name…"
                           onChange={ this.setStudentFullName }
                           value={this.state.fullName}
                           className={this.getInputClassName()}
                    />
                </p>
                <button onClick={ this.addNewStudent } disabled={this.hasInputError()}>Add student!</button>
            </div>
        );
    }
}

export default App;
