import React, { Component } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import CameraList from './CameraList'
import ShoppingCartList from './ShoppingCartList'
import { getCameras } from '../actions/index'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'


class App extends Component {
  componentDidMount() {
    this.props.getCameras()
}

camerasInCart = () => {
  return this.props.cameras.filter(camera => camera.inCart)
}

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <SearchBar />
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
