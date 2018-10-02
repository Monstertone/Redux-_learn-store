import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions'

class ShoppingCart extends Component {
    handleClick = (event) => {
        event.preventDefault()
        this.props.removeFromCart(this.props.item.id)
    }
    render(){
        return ( 
            <div>
                <div>
                    <h5 className="cart-item">{this.props.item.name}  <span><i className="fas fa-trash" id={this.props.item.id} onClick={this.handleClick}></i></span></h5>
                </div>   
            </div>    
        )
    }
}


export default connect(null, { removeFromCart })(ShoppingCart)