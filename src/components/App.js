import React, { Component } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import CameraList from './CameraList'
import ShoppingCartList from './ShoppingCartList'
import { getCameras } from '../actions/index'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        search: ''
    }
}

componentDidMount() {
  this.props.getCameras()
}

camerasInCart = () => {
  return this.props.cameras.filter(camera => camera.inCart)
}

// camerasOnSale = () => {
//   return this.props.cameras.filter(camera => camera.onSale)
// }

searchedCameras = () => {
  return this.props.cameras.filter(camera => camera.name)
}

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <SearchBar search={this.state.search} />
            <Row>
              <Col>
                <CameraList />
              </Col>
              <Col>
                <ShoppingCartList items={this.camerasInCart()}/>
              </Col> 
            </Row>
      </Container>
    </div> 
    )
  }
}

let mapStateToProps = state => {
  return {
    cameras: state.cameras
  }
}

export default connect(mapStateToProps, { getCameras })(App);
