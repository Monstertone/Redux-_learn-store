import React, { Component } from 'react'
import { searchCameras } from '../actions/index'
import {connect} from 'react-redux'

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            search: ''
        }
    }

    clickHandler = (event) => {
        event.preventDefault();
        this.props.searchCameras(this.state.search);
    }

    render(){
        return (
                <div>
                    <input
                        className="form-control mr-sm-2 search-bar"
                        value={this.state.search}
                        type="text"
                        name="search"
                        id="search"
                        onChange={(event)=> this.setState({search: event.target.value})}
                        placeholder="Search for a camera"
                        />
                    {/* <button 
                        type="submit"
                        className="btn btn-outline-success my-2 my-sm-0" 
                        value="submit">Search</button> */}
                </div>   
        )
    }
}

let mapStateToProps = state => {
    return {
        cameras: state.cameras
    }   
}

export default connect(mapStateToProps, { searchCameras })(SearchBar)