import React from "react";


// <ListItem color-='beżowy' />

export default class ListItem extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log('Constructor of ListItem called');
    }

    componentDidMount() {
        console.log('ListItem was mounted');
    }

    render() {
        const props = this.props;
        return <li style={props.style}>{props.text}: {props.color}</li>;
    }
}