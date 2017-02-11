import React from 'react'

export default class Search extends React.Component {

  handleClick(event) {
    event.preventDefault();
    var searchStr = this.refs.searchBar.value;
    this.props.handleSearch(searchStr);
  }

  render() {
    var formStyles = {
      marginTop: 40,
      marginBottom: 10
    };
    return (
      <div>
        <input type ="text" 
            className="form-control"  
            ref="searchBar" 
            style={formStyles}>
        </input>
        <input type="submit" 
            onClick={(event) => this.handleClick(event)}
            className="btn col-md-4 col-md-offset-8">
        </input>
      </div>
    )
  }
};