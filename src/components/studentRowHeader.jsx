import React from 'react';

// import './studentsList.css';

class StudentRowHeader extends React.PureComponent {

    render() {
        console.log(this.props);
        return (
            <tr>
                <th>
                    {this.props.fullName}
                </th>
                <th>
                    {this.props.numberOfBoozeUnits}
                </th>
            </tr>
        )
    }

}

export default StudentRowHeader;