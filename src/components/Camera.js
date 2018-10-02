import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/index'
// import ReactStars from 'react-stars'

class Camera extends Component {
    handleClick = (event) => {
        event.preventDefault()
        this.props.addToCart(this.props.camera.id)
    }
    render(){
        return (
            <div className="camera-display-styling">
                <h3>{this.props.camera.name}</h3>
                <h4>Price: {this.props.camera.price}</h4>
                <p>{this.props.camera.onSale ? 'ON SALE' : ''}</p>
                <img 
                    className="camera-photo"
                    alt="camera" 
                    src={this.props.camera.picture} />
                <h5>Rating: {this.props.camera.rating} stars</h5>
                <button 
                    type="submit" 
                    value="submit" 
                    className="btn btn-outline-success my-2 my-sm-0"
                    onClick={this.handleClick} 
                    id={this.props.camera.id}>Add to cart</button>
                <hr />
            </div>
        )
    } 
}


export default connect(null, {addToCart})(Camera)