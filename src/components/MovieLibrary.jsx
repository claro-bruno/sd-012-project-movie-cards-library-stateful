// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.submitForm = this.submitForm.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.seletGenreHandler = this.seletGenreHandler.bind(this);
    this.bookmarkedHandler = this.bookmarkedHandler.bind(this);
  }

  submitForm = () => {
    const { movies } = this.state;
    this.setState({
      movies,
    });
    console.log(movies.length);
  }

  bookmarkedHandler(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  seletGenreHandler(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  textHandler(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    if (bookmarkedOnly) movies = movies.filter((movie) => movie.bookmarked);
    if (selectedGenre) movies = movies.filter((movie) => movie.genre === selectedGenre);
    if (searchText) {
      movies = movies
        .filter(({ title, subtitle, storyline }) => title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText));
    }
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.textHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.seletGenreHandler }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.submitForm } />
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
