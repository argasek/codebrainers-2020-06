import React from 'react';

// import './studentsList.css';

class StudentRow extends React.PureComponent {


    render() {

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
                    <button onClick={() => {
                      this.props.giveBooze(this.props.index,"take away");
                    }}>-</button>
                    <button onClick={() => {
                        this.props.giveBooze(this.props.index,"give");
                    }}>+</button>
                </td>
            </tr>
        )
    }

}

export default StudentRow;