import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.changeStateFilter = this.changeStateFilter.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  changeStateFilter({ target }) {
    const { name, value } = target;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    if ((name === searchText) && (value.length > 0)) {
      this.setState({ searchText: target.value });
    }

    if ((name === bookmarkedOnly) && (value !== false)) {
      this.setState({ bookmarkedOnly: target.value });
    }

    if ((name === selectedGenre) && (value.length > 0)) {
      this.setState({ selectedGenre: target.value });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeStateFilter }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeStateFilter }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeStateFilter }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
