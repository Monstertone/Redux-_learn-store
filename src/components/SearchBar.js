import React, { Component } from 'react'
// import {connect} from 'react-redux'

class SearchBar extends Component {
    searchHandler = (event) => {
        event.preventDefault()
    }

    render(){
        return (
                <div>
                    <input
                        className="form-control mr-sm-2 search-bar"
                        // value={this.props.search}
                        type="text"
                        name="search"
                        id="search"
                        onChange={(event)=> this.setState({search: event.target.value})}
                        onSubmit={this.searchHandler}
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

// let mapStateToProps = state => {
//     return {
//         cameras: state.cameras
//     }   
// }

export default (SearchBar)