import React, { Component } from 'react';

class ShoppingCartItems extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.item_num}</th>
                <td>{this.props.team}</td>
                <td>{this.props.quantity}</td>
                <td>${this.props.price}</td>
                <td>${this.props.quantity * this.props.price}</td>
                <td><button type="button" className="btn btn-secondary btn-sm" onClick={this.props.onRemove}>Remove</button></td>
            </tr>
        );
    }
}

export default ShoppingCartItems;




