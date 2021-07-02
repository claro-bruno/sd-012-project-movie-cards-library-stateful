import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.newCard = this.newCard.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.onTextChangeSearch = this.onTextChangeSearch.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSelectedGenreChange({ target }) { // atualiza estado de selectedGenre a partir do value passado em <options>
    this.setState({
      selectedGenre: target.value,
    });
  }

  onTextChangeSearch({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === false) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  // Feito com ajuda de Márcio Daniel - Turma 8 e Diogo - Turma 12.
  filterMovies() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    let result = movies;
    if (bookmarkedOnly) {
      result = movies.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre) {
      result = result.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText) {
      result = result.filter((movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
    }
    return result;
  }

  // Feito com a ajuda de Diogo - Turma 12
  newCard(movie) { // o parâmetro movie recebe o this.state em 'onClick(this.state)' que fica no componente AddMovie.jsx;
    this.setState((prevState) => ({
      ...prevState,
      movies: [...prevState.movies, movie],
    }));
  }

  render() {
    const { onTextChangeSearch,
      onBookmarkedChange,
      onSelectedGenreChange,
      newCard } = this;
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onTextChangeSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList
          movies={ this.filterMovies() }
        />
        <AddMovie onClick={ newCard } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
MovieLibrary.defaultProps = {
  movies: '',
};

export default MovieLibrary;
