import React from 'react';

// import './studentsList.css';

class StudentRow extends React.PureComponent {


    render() {
        const disabled = this.props.numberOfBoozeUnits <=0;
        const className = this.props.numberOfBoozeUnits >= 30 && this.props.clicked ? "special" : "";
        // const className = '';
        if (this.props.numberOfBoozeUnits <= 100) {
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
                          this.props.giveBooze(this.props.index);

                        }}>+</button>
                        <button disabled={disabled} onClick={() => {
                          this.props.takeOfBooze(this.props.index);

                        }}>-</button>
                    </td>
                </tr>
            )
        } else {
            return null;
        }

    }

}

export default StudentRow;