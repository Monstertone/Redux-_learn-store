import React, { Component } from 'react'
import Camera from './Camera'
import { connect } from 'react-redux'

class CameraList extends Component {
    render() { 
        let cameras = this.props.cameras.map(camera => <Camera key={camera.id} camera={camera} />);
        return (
            <div>
                {cameras}
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        cameras: state.cameras
    }
}

export default connect(mapStateToProps)(CameraList)