// implement MovieLibrary component here!
import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    // const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default MovieLibrary;
