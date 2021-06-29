import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// implement AddMovie component here

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      movies,
    };

    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(newMovie) {
    const { movies } = this.state;

    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText="Final Fantasy"
          onSearchTextChange={ () => console.log('onSearchTextChange callback') }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => console.log('onBookmarkedChange callback') }
          selectedGenre="comedy"
          onSelectedGenreChange={ () => console.log('onSelectedGenreChange callback') }
        />

        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}
export default MovieLibrary;
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
