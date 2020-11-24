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
                new Student('Szymon H.', 98),
                new Student('Szymon T.', 99),
            ],
        };
    }
    boozeControl = (listOfStudents, index) =>{
        if (listOfStudents[index].numberOfBoozeUnits > 100) {
            delete listOfStudents[index];
        }
    }
    giveBooze = (clickedStudentIndex,action) => {
        let students = this.state.students.map(student => student.clone());
        if (action === "give") {
        students[clickedStudentIndex].numberOfBoozeUnits++;
        } else if (action==="take away") {
        students[clickedStudentIndex].numberOfBoozeUnits > 0 ? students[clickedStudentIndex].numberOfBoozeUnits-- : students[clickedStudentIndex].numberOfBoozeUnits = 0;
        }
        this.boozeControl(students, clickedStudentIndex);
        this.setState({ students: students });
    }
    addStudent = () => {
        let students = this.state.students.map(student => student.clone());
        const newStudentName = students[[Math.floor(Math.random()*students.length)]].fullName
        const newStudentBooze = students[[Math.floor(Math.random()*students.length)]].numberOfBoozeUnits
        const newStudentObj = new Student(newStudentName, newStudentBooze);
        students.push(newStudentObj);
        this.setState({students:students})
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

                <StudentsList
                  students={students}
                  clicked={this.state.clicked}
                  giveBooze={this.giveBooze}
                />
                <button onClick={this.addStudent}>Add Student</button>
            </div>
        );
    }
}

export default App;
