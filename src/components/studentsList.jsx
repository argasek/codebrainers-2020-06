import React from 'react';
import './studentsList.css';
import StudentRow from "./studentRow";
import StudentRowHeader from "./studentRowHeader";
import StudentEditForm from './studentEditForm';

class StudentsList extends React.PureComponent {

    render() {
        const students = this.props.students;
        const clicked = this.props.clicked;
        const editedStudentIndex = this.props.editedStudentIndex;
        const toggleEditStudent = () => this.props.toggleEditStudent(undefined);

        const updateBoozeUnits = (event) => this.props.updateBoozeUnits(event.currentTarget.value);
        const updateFullName = (event) => this.props.updateFullName(event.currentTarget.value);

        return (
            <div>
                <h2>{(editedStudentIndex !== undefined).toString()}{' '}{''+editedStudentIndex}</h2>
                <table className='students-table'>
                    <thead>
                    <StudentRowHeader
                        fullName='Imię i Nazwisko'
                        numberOfBoozeUnits='Jednostki gorzały'
                    />
                    </thead>
                    <tbody>
                    {
                        students.map((student, index) => {
                            return (
                                index !== editedStudentIndex ?
                                    <StudentRow
                                        key={ index }
                                        fullName={ student.fullName }
                                        numberOfBoozeUnits={ student.numberOfBoozeUnits < 0 ? 0 : student.numberOfBoozeUnits }
                                        clicked={ clicked }
                                        giveBooze={ this.props.giveBooze }
                                        takeBooze={ this.props.takeBooze }
                                        removeStudent={ this.props.removeStudent }
                                        editStudent={ this.props.toggleEditStudent }
                                        index={ index }
                                    />
                                    :
                                    <StudentEditForm
                                        editBoozeUnits={updateBoozeUnits}
                                        editFullName={updateFullName}
                                        student={student}
                                        toggleEditStudent={toggleEditStudent}
                                    />
                            )
                        })

                    }
                    </tbody>

                </table>
            </div>
        );
    }

}

export default StudentsList;