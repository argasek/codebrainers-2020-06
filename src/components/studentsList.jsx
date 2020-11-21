import React from 'react';
import './studentsList.css';
import StudentRow from "./studentRow";
import StudentRowHeader from "./studentRowHeader";

class StudentsList extends React.PureComponent {

    render() {
        return (
            <table className='students-table'>
                <thead>
                    <StudentRowHeader fullName='Imię i Nazwisko' numberOfBoozeUnits='Jednostki gorzały'/>
                </thead>
                <tbody>
                    <StudentRow fullName={'Grzegorz Koczanowicz'} numberOfBoozeUnits={3}/>
                    <StudentRow numberOfBoozeUnits={4}/>
                </tbody>

            </table>
        )
    }

}

export default StudentsList;