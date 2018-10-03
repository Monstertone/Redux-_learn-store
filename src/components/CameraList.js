import React, { Component } from 'react'
import Camera from './Camera'
import { connect } from 'react-redux'

class CameraList extends Component {
    render() { 
        let searchedText = this.props.search.toLowerCase()
        console.log(this.props.search)

        let searchedCameras = this.props.cameras.filter(camera => camera.name.toLowerCase().includes(searchedText))
        let cameras = searchedCameras.map(camera => <Camera key={camera.id} camera={camera} />);
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