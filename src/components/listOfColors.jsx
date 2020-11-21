import React from 'react';


export default class ListOfColors extends React.PureComponent {

    render() {
        const arr = ['red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass'];
        const styleObject = {
            color: 'green',
            backgroundColor: 'pink'
        };

        const ListItem = props => <li style={props.style}>{props.text}: {props.color}</li>;

        const mapper = function (color, index) {
            const isIndexEven = index % 2;
            const evenListItem = <ListItem style={styleObject} color={color} text="Special color"/>;
            const oddListItem = <li color={color}>{`"I'm Groot!" Color name: ${color}`}</li>;
            return isIndexEven ? evenListItem : oddListItem;
        };

        // 2
        return arr.map(mapper);
    }
}