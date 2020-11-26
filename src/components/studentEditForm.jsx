import React from 'react';

const StudentEditForm = (props) => {

    const fullName = props.student.fullName;
    const numberOfBoozeUnits = props.student.numberOfBoozeUnits;
    const toggleEditStudent = props.toggleEditStudent;
    return (
        <tr>
            <td>
                <label>Full name:</label><br/>
                <input type='text' value={fullName} onChange={props.editFullName} />
            </td>
            <td>
                <label>Booze units:</label><br/>
                <input type='text' value={numberOfBoozeUnits} onChange={props.editBoozeUnits} />
            </td>
            <td>
                <button onClick={toggleEditStudent}>Save</button>
            </td>
        </tr>
    )
};

export default StudentEditForm;