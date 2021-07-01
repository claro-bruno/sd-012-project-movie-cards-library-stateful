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
    this.teste = this.teste.bind(this);
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

  // Feito com ajuda de Márcio Daniel - Turma 8
  teste() {
    console.log('função teste: contém os filtros');
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    if (bookmarkedOnly) {
      const filter = movies.filter((movie) => movie.bookmarked);
      this.setState({
        movies: filter,
      });
    }
    if (selectedGenre) {
      const filterGenre = movies.filter((movie) => movie.genre === selectedGenre);
      this.setState({
        movies: filterGenre,
      });
    }
    if (searchText) {
      const filterText = movies.filter((movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
      this.setState({
        movies: filterText,
      });
    }
  }

  render() {
    const { onTextChangeSearch, onBookmarkedChange, onSelectedGenreChange } = this;
    const { bookmarkedOnly, selectedGenre, searchText, movies } = this.state;
    return (
      <div>
        <button type="button" onClick={ this.teste }>Botão</button>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onTextChangeSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
          teste={ this.teste }
        />
        <AddMovie />
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
