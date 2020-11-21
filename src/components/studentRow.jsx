import React from 'react';

// import './studentsList.css';

class StudentRow extends React.PureComponent {


    render() {
        console.log(this.props);
        const className = this.props.numberOfBoozeUnits >= 30 && this.props.clicked ? "special" : "";
        // const className = '';
        return (
            <tr className={className}>
                <td>
                    {this.props.fullName}
                </td>
                <td>
                    {this.props.numberOfBoozeUnits}
                </td>
                <td>
                    <button onClick={this.props.giveBooze}>Give booze</button>
                </td>
            </tr>
        )
    }

}

export default StudentRow;