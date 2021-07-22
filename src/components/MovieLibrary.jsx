import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={
            ({ target }) => this.setState({ searchText: target.value })
          }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={
            ({ target }) => this.setState({ bookmarkedOnly: target.value })
          }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={
            ({ target }) => this.setState({ selectedGenre: target.value })
          }
        />
        { movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />) }
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
