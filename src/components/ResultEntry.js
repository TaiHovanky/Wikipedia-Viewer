import React from 'react'

export default class ResultEntry extends React.Component {
  
  render() {
    var entryStyles = {
      textDecoration: 'none'
    };
    return (
      <div className="well">
        <a style={entryStyles} href={this.props.result.url}>
          <h4>{this.props.result.info}</h4>
        </a>
      </div>
    )
  }
};