import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
// import Select from './Select';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  onSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    })
  }

  onBookmarkedChange(e) {
    console.log(e.target);
  }

  render() {
    const { searchText, bookmarkedOnly } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } data-testid="search-bar-form">
        <Input value={ searchText } onChange={ this.onSearchTextChange } />
        <Checkbox checked={ bookmarkedOnly } onChange={ this.onBookmarkedChange } />
        {/* <Select /> */}
      </form>
    );
  }
}

export default SearchBar;
