import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.globalChange = this.globalChange.bind(this);
    this.addMovieClick = this.addMovieClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,

    };
  }

  // Função retirada do Course //
  globalChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // Essa função peguei do código do colega Vinicius Patriota
  addMovieClick(newMovie) {
    this.setState((prevState) => ({ movies: [...prevState.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.globalChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.globalChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.globalChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieClick } />
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

// Recebi ajuda de dois amigos para fazer esse projeto. Ed Santos e Milton Castro me ajudaram //
// entrando em call comigo e dando idéias para fazer algumas funções. //
