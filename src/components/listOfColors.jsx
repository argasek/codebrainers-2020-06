import React from 'react';
import ListItem from './listItem';

export default class ListOfColors extends React.PureComponent {

    mapper(color, index) {
        const styleObject = {
            color: 'green',
            backgroundColor: 'pink'
        };
        const isIndexEven = index % 2;
        const evenListItem = <ListItem style={styleObject} color={color} text="Special color"/>;
        const oddListItem = <li color={color}>{`"I'm Groot!" Color name: ${color}`}</li>;
        return isIndexEven ? evenListItem : oddListItem;
    }

    render() {
        return this.props.colors.map(this.mapper);
    }
}