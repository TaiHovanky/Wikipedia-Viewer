var App = React.createClass({
  getInitialState: function(){
    return {
      results: []
    }
  },
  componentDidMount: function(){
    this.fetchWikis(query);
  },
  fetchWikis: function(query){
    var thisObj = this;
    searchWikipedia(query, thisObj, function(results){
      thisObj.setState({
        results: results
      });
    });
  },
  render: function(){
    return (
      <div>
        <Title/>
        <Search handleSearch={this.fetchWikis.bind(this)}/>
        <ResultsList results={this.state.results}/>
      </div>
    );
  }
});

function searchWikipedia(query, obj, callback){
  $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search='+query+'&callback=?', function(resArr){
    var resultsArr = [];
    for(var i=0; i<5; i++){
      var resultObj = {
        url: resArr[3][i],
        info: resArr[1][i] + ': ' + resArr[2][i]
      }
      resultsArr.push(resultObj);
    }
    callback(resultsArr);
  });
}

var Title =  function(){
    return (
      <div>
        <h1>Search Wikipedia</h1>
      </div>
    );
};

var Search = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    var searchStr = this.refs.searchBar.value;
    this.props.handleSearch(searchStr);
  },
  render: function(){
    var formStyles = {
      marginTop: 40,
      marginBottom: 10
    };
    return (
      <div>
        <input type ="text" className="form-control"  ref="searchBar" style={formStyles}></input>
        <input type="submit" onClick={this.handleClick} className="btn col-md-4 col-md-offset-8"></input>
      </div>
    )
  }
});

var ResultsList = function(props){
    var listStyles = {
      marginTop: 120
    };
    return (
      <div style={listStyles}>
        <ul>
          {props.results.map(function(result){
            return <ResultEntry result={result} />
          })}
        </ul>
      </div>
    )
};

var ResultEntry = function(props){
    var entryStyles = {
      textDecoration: 'none'
    };
    return (
      <div className="well">
        <a style={entryStyles} href={props.result.url}>
          <h4>{props.result.info}</h4>
        </a>
      </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('app'));