import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
          <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
              <a href="" className="navbar-brand d-flex align-items-center">
                <strong><i className="far fa-futbol"></i> Soccer Jersey Store</strong>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="glyphicon glyphicon-shopping-cart" data-toggle="modal" data-target="#exampleModal">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="counter">
                    No. of Items: {this.props.noItems} </span>
                    <span className="counter">
                   Sub-Total: ${this.props.subTotal}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </header>
        );
    }
}

export default Header;
