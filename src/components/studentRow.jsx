import React from 'react';

// import './studentsList.css';

class StudentRow extends React.PureComponent {

    render() {
        console.log(this.props);
        return (
            <tr>
                <td>
                    {this.props.fullName}
                </td>
                <td>
                    {this.props.numberOfBoozeUnits}
                </td>
            </tr>
        )
    }

}

export default StudentRow;