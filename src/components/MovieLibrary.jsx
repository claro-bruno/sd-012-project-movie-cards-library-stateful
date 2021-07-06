// implement MovieLibrary component here!
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  // Passar a props como parâmetro do constructor para poder utilizar como estado inicial na chave movies visto no slack da trybe, no link shorturl.at/aFIP2
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  lowerTxt(txt, searchTxt) {
    return txt.toLowerCase().includes(searchTxt.toLowerCase());
  }

  filterMovie() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    const { lowerTxt } = this;
    return movies.filter(({ title, subtitle, storyline }) => (lowerTxt(title, searchText)
      || lowerTxt(subtitle, searchText)
      || lowerTxt(storyline, searchText)))
      .filter(({ bookmarked }) => (bookmarkedOnly ? bookmarked : bookmarked !== null))
      .filter(({ genre }) => (selectedGenre ? genre === selectedGenre : genre));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovie() } />
        <AddMovie movies={ movies } onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
