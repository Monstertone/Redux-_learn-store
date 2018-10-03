import React, { Component } from 'react'

class SearchBar extends Component {
    render(){
        return (
            <div>
                    <input
                        className="form-control mr-sm-2 search-bar"
                        value={this.props.search}
                        type="text"
                        name="search"
                        id="search"
                        onChange={(event)=> this.props.updateSearch(event.target.value)}
                        placeholder="Search for a camera"
                        /> 
            </div>   
        )
    }
}

export default SearchBar