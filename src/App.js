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
    }

    takeOfBooze = (clickedStudentIndex) => {
        let students = this.state.students.map(student => student.clone());

        students[clickedStudentIndex].numberOfBoozeUnits--;

        this.setState({ students: students });
    }

    getRandomIntNameArray = array => array[Math.floor(Math.random() * array.length)];

    addNewStudent = () => {
        let students = this.state.students.map(student => student.clone());
        const randomBoozeUnits = Math.floor(Math.random() * 99) + 1;
        const nameArray = ['Konstanty',
            'Julka', 'Andżej', 'Joanna',
            'Marta', 'Rysiu', 'Jareczek',
            'Janusz', 'Juleczka'];
        const nameIndex = Math.floor(Math.random() * nameArray.length);
        students.push(new Student(nameArray[nameIndex], randomBoozeUnits));
        this.setState({students: students});
    }

    componentDidMount() {
        console.log(this);
    }

    // showAlert = () => {
    //     this.setState({
    //         clicked: true
    //     });
    // }

    render() {
        const students = this.state.students;

        return (
            <div className="App">

                <h1>List of students</h1>

                <StudentsList
                  students={students}
                  clicked={this.state.clicked}
                  giveBooze={this.giveBooze}
                  takeOfBooze={this.takeOfBooze}
                />
                {/*<button onClick={this.showAlert}>Click me!</button>*/}
                <button onClick={this.addNewStudent}>Add student!</button>
            </div>
        );
    }
}

export default App;
