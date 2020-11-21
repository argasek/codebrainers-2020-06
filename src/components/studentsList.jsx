import React from 'react';
import './studentsList.css';
import StudentRow from "./studentRow";
import StudentRowHeader from "./studentRowHeader";

class StudentsList extends React.PureComponent {

    giveBooze = () => {
        this.props.numberOfBoozeUnits++; 
    }

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
                                    numberOfBoozeUnits={student.numberOfBoozeUnits}
                                    clicked={clicked}
                                    giveBooze={this.giveBooze}
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