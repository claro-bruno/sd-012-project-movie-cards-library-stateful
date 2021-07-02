import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovies from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    // const { movies } = this.props;
    // const { movies } = props;
    // é a mesma coisa esses de cima
    this.state = {
      searchText: '',
      bookmarkedOnly: false, // essa é a checkbox quando não está selecionada
      selectedGenre: '',
      movies: props.movies,
    };

    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addNewMovie = ({ title, subtitle, storyline, rating, genre, imagePath }) => {
    const newMovie = { title,
      subtitle,
      storyline,
      rating: parseFloat(rating),
      genre,
      imagePath,
    };
    this.setState(({ movies }) => ({ movies: [...movies, newMovie] })); // o "...movies" quer dizer que já tem os filmes antigos e adiciona os que colocar em newMovie
  }

  filterMovies(movieList) {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    const search = movieList.filter((movie) => {
      const check = (movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
      return check;
    });
    const favorite = bookmarkedOnly ? search.filter((movie) => movie.bookmarked) : search;
    // se bookmarkedOnly for verdadeiro entra no filtro e filtra os verdadeiros dentro de data.bookmarked senão ele só usa o search que recebe a função de filtro
    const result = selectedGenre ? favorite
      .filter((movie) => movie.genre === selectedGenre) : favorite;
    return result;
  }

  render() {
    const { searchText,
      bookmarkedOnly,
      selectedGenre,
      movies, // array de filmes que será do data
    } = this.state;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(movies) } />
        <AddMovies onClick={ this.addNewMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool.isRequired,
      genre: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieLibrary;
