import React from 'react';

// import './studentsList.css';

class StudentRowHeader extends React.PureComponent {

    render() {
        return (
            <tr>
                <th>
                    {this.props.fullName}
                </th>
                <th>
                    {this.props.numberOfBoozeUnits}
                </th>
                <th>
                    Actions
                </th>
            </tr>
        )
    }

}

export default StudentRowHeader;