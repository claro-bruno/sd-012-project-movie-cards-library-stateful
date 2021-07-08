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

    this.handleChange = this.handleChange.bind(this);
    this.addFilm = this.addFilm.bind(this);
  }

  handleChange({ target }) {
    const { type, value, checked } = target;
    if (type === 'text') {
      this.setState({
        searchText: value,
      });
    } else if (type === 'checkbox') {
      this.setState({
        bookmarkedOnly: checked,
      });
    } else {
      this.setState({
        selectedGenre: value,
      });
    }
  }

  addFilm(newFilm) {
    this.setState((antiqueFilm) => ({
      movies: [...antiqueFilm.movies, newFilm],
    }));
  }
  // se o tipo do valor for igual a checkbox, ele vai pegar o target.checked (que existe no checkbox), senão, ele pega o value

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ (newFilm) => this.addFilm(newFilm) } />
      </div>

    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default MovieLibrary;
