import React, { Component } from 'react';
import ShoppingCartItems from './ShoppingCartItems'

class ShoppingCart extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Total</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            <tbody>{this.props.cart
                                .map((item, index, array) => {
                                    if(item.quantity !== 0) {
                                        return <ShoppingCartItems
                                        key={index}
                                        item_num={index + 1}
                                        team={item.team}
                                        quantity={item.quantity}
                                        price={item.price}    
                                        onRemove={index => this.props.onRemove(index)}                                    
                                        />
                                    }
                                    else {return null}
                                })

                            }
                            </tbody>
                            <tfoot>{this.props.cart.length === 0 ? <tr>
                            <td colSpan="5">Your cart is empty</td>
                            </tr> : null
                            }
                            
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;








