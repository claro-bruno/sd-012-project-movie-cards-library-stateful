import React from 'react';
import PropTypes from 'prop-types';
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
        <Input searchText={ searchText } onSearchTextChange={ onSearchTextChange } />
        <Checkbox checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <Select value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: 'action',
};

export default SearchBar;
