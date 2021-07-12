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

  /** Solução para substituir os if's que alternam o estado do checkbox entre true e false retirada de https://www.freecodecamp.org/learn/front-end-libraries/react/use-state-to-toggle-an-element */
  onBookmarkedChange() {
    this.setState((state) => ({
      bookmarkedOnly: !state.bookmarkedOnly,
    }));
  }

  // Feito com ajuda de Márcio Daniel - Turma 8, Diogo Santana, Miguel Retroz, André Dantas (Turma 12)
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
  newCard(movie) { // o parâmetro 'movie' recebe o this.state.movies, que correspondete ao array do estado prévio (atualizado) em 'onClick(this.state)' que fica no componente AddMovie.jsx. O array movies é passado como props.
    this.setState((prevState) => ({ // O parâmetro prevState recebe o state anterior referente às modificações que consiste no array movies (no formato original).
      ...prevState, // prepara o array movies para ser espalhado na chave movies de this.state.
      movies: [...prevState.movies, movie], // a chave movies de this.state.movies receberá o array anterior, que contém os objetos (filmes), espalhado no novo array e, logo após, será inserido o novo filme (movie), que corresponde ao novo objeto que foi adicionado pelo usuário.
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
