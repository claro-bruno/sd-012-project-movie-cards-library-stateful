import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
import Select from './Select';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { searchText, onSearchTextChange } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form onSubmit={ this.handleSubmit } data-testid="search-bar-form">
        <Input value={ searchText } onChange={ onSearchTextChange } />
        <Checkbox checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <Select value={ selectedGenre } onChange={ onSelectedGenreChange }/>
      </form>
    );
  }
}

export default SearchBar;
