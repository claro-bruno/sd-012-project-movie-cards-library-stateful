import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.stateFromAddMovie = this.stateFromAddMovie.bind(this);
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {});
  }

  stateFromAddMovie(state) {
    const { movies } = this.props;

    const stateOfAddMovie = {
      subtitle: state.subtitle,
      title: state.title,
      storyline: state.storyline,
      rating: state.rating,
      imagePath: state.imagePath,
      bookmarked: state.bookmarked,
      genre: state.genre,
    };
    this.setState({ movies: [...movies, stateOfAddMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChanges }
          onBookmarkedChange={ this.handleChanges }
          onSelectedGenreChange={ this.handleChanges }
        />
        <MovieList
          movies={ movies
            .filter((filtCheck) => (
              bookmarkedOnly
                ? filtCheck.bookmarked === bookmarkedOnly
                : filtCheck.genre.includes(selectedGenre)
            ))
            .filter((filtGen) => filtGen.genre.includes(selectedGenre))
            .filter((filtText) => (
              filtText.title.toLowerCase().includes(searchText.toLocaleLowerCase())
              || filtText.subtitle.toLowerCase().includes(searchText.toLocaleLowerCase())
              || filtText.storyline.toLowerCase()
                .includes(searchText.toLocaleLowerCase()))) }
        />
        <AddMovie onClick={ this.stateFromAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
