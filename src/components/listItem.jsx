import React from "react";

export default class ListItem extends React.PureComponent {
    render() {
        const props = this.props;
        return <li style={props.style}>{props.text}: {props.color}</li>;
    }
}