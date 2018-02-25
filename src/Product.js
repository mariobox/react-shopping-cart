import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "ADD TO CART"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {

        this.setState({
            buttonText: "✔ ADDED"
        }, function () {
            setTimeout(() => {
                this.setState({
                    buttonText: "ADD TO CART"
                });
            }, 2000);
        })
        this.props.addToCart();
    }


    render() {
        return (
            <div className="col-sm">
                <div className="card text-center">
                    <div className="card-body">
                        <img src={this.props.teamPic} className="shirt" alt={this.props.teamName} />
                        <h5 className="card-title">{this.props.teamName}</h5>
                        <h4 className="card-text price">{this.props.teamPrice}</h4>
                        <div className="stepper-input">
                            <span className="decrement" onClick={this.props.decreaseQuantity}>-</span>
                            <input className="quantity" value={this.props.teamQuantity} />
                            <span className="increment" onClick={this.props.increaseQuantity}>+</span>
                        </div>
                        <span className="btn btn-primary add" onClick={this.handleClick}>{this.state.buttonText}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;

