import React, { Component } from 'react'
import ShoppingCart from './ShoppingCartItem'

class ShoppingCartList extends Component {
    render(){
        let cameras = this.props.items.map(item => <ShoppingCart key={item.id} item={item} />)
        console.log(cameras)
        return(
            <div className="shopping-cart">
                <h5 className="shopping-cart-header">Shopping cart</h5>

                <div>{cameras}</div> 

                <div className="checkout-btn"><button 
                    type="submit" 
                    value="submit">Checkout</button></div>
            </div>
        )
    }
}

export default (ShoppingCartList)