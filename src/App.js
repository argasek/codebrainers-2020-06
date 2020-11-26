import React from 'react';
import './App.css';
import Student from './models/student';
import StudentsList from './components/studentsList';
import { students } from './models/students';


// CRUD = Create Retrieve Update Delete

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editedStudentIndex: undefined,
            isFullNamePristine: true,
            clicked: false,
            students,
            fullName: "",
        };
    }
    getInputClassName = () => {
         return (this.hasInputError() && !this.state.isFullNamePristine) ? "has-error" : ""
    }

    hasInputError = () => !(this.state.fullName.trim()!=="");


    getClonedStudents = () => this.state.students.map(student => student.clone());

    giveBooze = (clickedStudentIndex) => {
        const students = this.getClonedStudents();
        students[clickedStudentIndex].numberOfBoozeUnits++;
        this.setState({ students: students });
    };

    takeBooze = (clickedStudentIndex) => {
        const students = this.getClonedStudents();
        students[clickedStudentIndex].numberOfBoozeUnits--;
        this.setState({ students: students });
    };

    updateFullName = (fullName) => {
        const editedStudentIndex = this.state.editedStudentIndex;
        const students = this.getClonedStudents();
        students[editedStudentIndex].fullName = fullName;
        this.setState({ students: students });
    };

    updateBoozeUnits = (numberOfBoozeUnits) => {
        const editedStudentIndex = this.state.editedStudentIndex;
        const students = this.getClonedStudents();
        students[editedStudentIndex].numberOfBoozeUnits = numberOfBoozeUnits;
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
        if (prevState.fullName !== this.state.fullName){
           this.setState({isFullNamePristine: false});
        }
    }

    setStudentFullName = (event) => {
        const fullName = event.currentTarget.value;
        this.setState({ fullName })
    };

    toggleEditStudent = (editedStudentIndex) => {
        console.log('editedStudentIndex: ', editedStudentIndex);
        this.setState({ editedStudentIndex });
    }

    removeStudent = (studentIndex) => {
        const students = this.state.students.filter((student, index) => {
            return !(index === studentIndex);
        })
        this.setState({ students: students });
    }

    render() {
        const students = this.state.students;
        const editedStudentIndex = this.state.editedStudentIndex;

        return (
            <div className="App">

                <h1>List of students</h1>

                <StudentsList
                    students={ students }
                    clicked={ this.state.clicked }
                    giveBooze={ this.giveBooze }
                    takeBooze={ this.takeBooze }
                    editedStudentIndex={editedStudentIndex}
                    toggleEditStudent={this.toggleEditStudent }
                    removeStudent={this.removeStudent}
                    updateFullName={this.updateFullName}
                    updateBoozeUnits={this.updateBoozeUnits}
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
