import React from 'react'
import ResultEntry from './ResultEntry'

export default class ResultsList extends React.Component {
  render(){
    var listStyles = {
      marginTop: 120
    }

    return (
    <div style={listStyles}>
      <ul>
        {this.props.results.map((result) => {
          return <ResultEntry result={result} />
        })}
      </ul>
    </div>
    )
  }
}