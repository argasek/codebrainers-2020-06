import React from 'react';

// import './studentsList.css';

class StudentRow extends React.PureComponent {

    render() {
        const giveBooze = () => this.props.giveBooze(this.props.index);
        const takeBooze = () => this.props.takeBooze(this.props.index);
        const removeStudent = () => this.props.removeStudent(this.props.index);
        const editStudent = () => this.props.editStudent(this.props.index);

        const disabled = this.props.numberOfBoozeUnits <=0;
        const className = this.props.numberOfBoozeUnits >= 30 && this.props.clicked ? "special" : "";

        if (this.props.numberOfBoozeUnits <= 100) {
            return (
                <tr className={className}>
                    <td>
                        {this.props.index}{' '}
                        {this.props.fullName}
                    </td>
                    <td>
                        {this.props.numberOfBoozeUnits}
                    </td>
                    <td>
                        <button onClick={giveBooze}>+</button>
                        <button disabled={disabled} onClick={takeBooze}>-</button>
                        <button onClick={removeStudent}>Remove</button>
                        <button onClick={editStudent}>Edit</button>
                    </td>
                </tr>
            )
        } else {
            return null;
        }

    }

}

export default StudentRow;