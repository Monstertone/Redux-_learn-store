import React, { Component } from 'react'
import ShoppingCart from './ShoppingCartItem'

class ShoppingCartList extends Component {
    render(){
        let cameras = this.props.items.map(item => <ShoppingCart key={item.id} item={item} />)
        console.log('cameras in cart', cameras)

        const subtotal = this.props.items.filter(item => item.inCart)
        let modifiedSubtotal = subtotal.reduce((acc, item) => acc + parseFloat(item.price.replace(/,/g, '').slice(1)), 0)

        const tax = this.props.items.filter(item => item.inCart)
        let modifiedTax = tax.reduce((acc, item)=> acc + ( .086 * parseFloat(item.price.replace(/,/g, '').slice(1))), 0)

        const total = modifiedSubtotal + modifiedTax
        return(
            <div className="shopping-cart">
                <h4 className="shopping-cart-header">Shopping cart</h4>

                <div>{cameras}</div> 

                <p className="totals total-top">Subtotal: ${`${modifiedSubtotal.toFixed(2)}`}</p>
                <p className="totals">Tax: ${`${modifiedTax.toFixed(2)}`}</p>
                <p className="totals">Total: ${`${total.toFixed(2)}`}</p>
                <div className="checkout-btn"><button 
                    type="submit" 
                    value="submit"
                    className="btn btn-outline-success my-2 my-md-0">Checkout</button></div>
            </div>
        )
    }
}

export default (ShoppingCartList)