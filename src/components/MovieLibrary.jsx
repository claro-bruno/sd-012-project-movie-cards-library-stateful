import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.handleChange = this.handleChange.bind(this);
    this.changeMovieList = this.changeMovieList.bind(this);

    this.state = {
      movies,
      textInput: '',
      genreOption: '',
      favoritesOnly: '',
    };
  }

  render() {
    const { textInput, favoritesOnly, genreOption } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ textInput }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ favoritesOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ genreOption }
          onSelectedGenreChange={ this.handleChange }
        />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
