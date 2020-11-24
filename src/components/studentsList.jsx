import React from 'react';
import './studentsList.css';
import StudentRow from "./studentRow";
import StudentRowHeader from "./studentRowHeader";

class StudentsList extends React.PureComponent {



    render() {
        const students = this.props.students;
        const clicked = this.props.clicked;
        return (
            <table className='students-table'>
                <thead>
                    <StudentRowHeader fullName='Imię i Nazwisko' numberOfBoozeUnits='Jednostki gorzały'/>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => {
                            return (
                                <StudentRow
                                    key={index}
                                    fullName={student.fullName}
                                    numberOfBoozeUnits={student.numberOfBoozeUnits <0 ? 0 : student.numberOfBoozeUnits}
                                    clicked={clicked}
                                    giveBooze={this.props.giveBooze}
                                    takeBooze={this.props.takeBooze}
                                    index={index}
                                />
                            )
                        })
                    }
                </tbody>

            </table>
        )
    }

}

export default StudentsList;