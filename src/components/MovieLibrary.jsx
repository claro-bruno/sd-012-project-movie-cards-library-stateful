import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
// import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    const moviesList = movies;

    const initialState = {
      searchText: '',
      bookmarkedOnly: false,
      selectGenre: '',
      movies: moviesList,
      movies2: moviesList,
    };

    this.state = initialState;
  }

  filtro = () => {
    const { bookmarkedOnly, selectGenre, searchText, movies2 } = this.state;
    if (searchText === '') {
      this.setState({ movies: movies2 });
    } else {
      const listFiltered = movies2.filter(
        (movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
          || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
          || movie.storyline.toLowerCase().includes(searchText.toLowerCase()),
      );
      this.setState({ movies: listFiltered });
    } if (bookmarkedOnly === true) {
      this.setState({ movies: movies2.filter((movie) => movie.bookmarked === true) });
    }
    if (selectGenre !== '') {
      this.selecFunc();
    }
  }

  selecFunc = () => {
    const { selectGenre, movies2 } = this.state;
    if (selectGenre === 'action') {
      this.setState({ movies: movies2.filter((movie) => movie.genre === 'action') });
    }
    if (selectGenre === 'comedy') {
      this.setState({ movies: movies2.filter((movie) => movie.genre === 'comedy') });
    }
    if (selectGenre === 'thriller') {
      this.setState({ movies: movies2.filter((movie) => movie.genre === 'thriller') });
    }
  }

  callBack = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.filtro());
  }

  callBackMarked = (e) => {
    const { bookmarkedOnly } = this.state;
    const { name, value } = e.target;
    if (value === 'on') {
      this.setState({ [name]: true }, () => this.filtro());
    }
    if (bookmarkedOnly === true) {
      this.setState({ [name]: false }, () => this.filtro());
    }
  }

  moviesFiltered = () => {
    const { movies } = this.state;
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.callBack }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.callBackMarked }
          selectGenre={ selectGenre }
          onSelectedGenreChange={ this.callBack }
        />
        <MovieList
          movies={ movies }
        />
        {/* <AddMovie /> */}
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
