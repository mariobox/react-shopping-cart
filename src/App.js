import React, { Component } from 'react';
import './App.css';
import { teamList } from './shirts';
import Product from './Product';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teamList: teamList,
      cart: []
    }
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.toggleShoppingCart = this.toggleShoppingCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  increaseQuantity(quantity, indexToChange) {
    this.setState(
      {
        teamList: this.state.teamList.map((team, index) => {
          if (index === indexToChange) {
            return {
              ...team,
              quantity: team.quantity + 1
            }
          };
          return team;
        })
      });
  }

  decreaseQuantity(quantity, indexToChange) {
    this.setState(
      {
        teamList: this.state.teamList.map((team, index) => {
          console.log(indexToChange);
          if (index === indexToChange) {
            return {
              ...team,
              quantity: team.quantity - 1
            }
          };
          return team;
        })
      });
  }

  toggleShoppingCart() {
    let sc = document.getElementById("shoppingCart");
    if (sc.style.display === "block") {
      sc.style.display = "none"
    }
    else {
      sc.style.display = "block";
    }
  }

  addToCart(selectedTeam) {
    let cartItems = this.state.cart;
		let productID = selectedTeam.id;
		let productQty = selectedTeam.quantity;
    if(this.checkProduct(productID)){
			console.log('hi');
			let index = cartItems.findIndex((x => x.id == productID));
			cartItems[index].quantity = Number(cartItems[index].quantity) + Number(productQty);
			this.setState({
				cart: cartItems
			})
		} else {
			cartItems.push(selectedTeam);
      this.setState({
        cart: cartItems
      })
		}

    
  }

  onRemove(index) {
    this.state.cart.splice(index, 1);
    this.setState({
      cart: this.state.cart
    })
  }

  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.id === productID;
    });
  }

  render() {
    return (
      <div>
        <header>
          <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
              <a href="" className="navbar-brand d-flex align-items-center">
                <strong>Soccer Jersey Store</strong>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="glyphicon glyphicon-shopping-cart" onClick={this.toggleShoppingCart}><i className="fas fa-shopping-cart"></i></span>
              </button>
            </div>
          </div>
        </header>
        <br />
        <div id="shoppingCart">
          <ShoppingCart
            cart={this.state.cart}
            onRemove={(index) => this.onRemove(index)}
            />
        </div>
        <div className="container">
          <div className="row">
            {
              this.state.teamList.map((team, index) => <Product
                key={team.id}
                teamPic={team.image}
                teamName={team.team}
                teamPrice={team.price}
                teamQuantity={team.quantity}
                increaseQuantity={text => this.increaseQuantity(text, index)}
                decreaseQuantity={text => this.decreaseQuantity(text, index)}
                addToCart={() => this.addToCart(team)}
                />)
            }

          </div>
        </div>
      </div>

    );
  }
}

export default App;
