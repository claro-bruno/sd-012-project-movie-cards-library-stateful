import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      movies,
      textInput: '',
      genreOption: '',
      favoritesOnly: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeMovieList = this.changeMovieList.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({ [name]: value });
    // Lidando com os campos de entrada
    // pegando o conceito de https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/
  }

  addMovie = (newMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  changeMovieList() {
    const { favoritesOnly } = this.state;
    if (favoritesOnly === false) {
      this.setState({
        favoritesOnly: true,
      });
    } else {
      this.setState({
        favoritesOnly: false,
      });
    }
  }
  // Com base no colega fabio Ryudi
  /* https://github.com/tryber/sd-012-project-movie-cards-library-stateful/blob/fabio-ryudi-movie-cards-library-stateful/src/components/AddMovie.jsx */

  render() {
    const { movies } = this.state;
    // Rederizando o estado dos filmes
    const { textInput, favoritesOnly, genreOption } = this.state;
    // Definindo as estradas
    const filterMovies = movies

      .filter(({ bookmarked }) => !favoritesOnly || bookmarked)
      .filter(
        ({ title, subtitle, storyline }) => title.includes(textInput)
            || subtitle.includes(textInput)
            || storyline.includes(textInput),
      )
      .filter(({ genre }) => genre.includes(genreOption));
    return (
      <div>
        <SearchBar
          searchText={ textInput }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ favoritesOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ genreOption }
          onSelectedGenreChange={ this.handleChange }
        />
        <div>
          <MovieList
            movies={ filterMovies }
            searchText={ textInput }
            bookmarkedOnly={ favoritesOnly }
            selectedGenre={ genreOption }
          />
        </div>
        <AddMovie
          onClick={ this.changeMovieList }
        />
      </div>

    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
