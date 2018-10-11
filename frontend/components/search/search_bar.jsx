import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  update(prop) {
    return (e) => {
      e.preventDefault();
      this.setState({[prop]: e.target.value});
    }
  }

  render () {
    return (
      <div className="search-bar">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            onChange={ this.update( "searchText" )}
            placeholder="Search"
            value={ this.state.searchText } />
          <button type="submit"> <i className="fas fa-search"></i></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
