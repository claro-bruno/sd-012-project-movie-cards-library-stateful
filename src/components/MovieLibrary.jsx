// implement MovieLibrary component here
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
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
  }

  handleTextChange({ target }) {
    const { value } = target;

    this.setState({ searchText: value });
  }

  handleBookmarkedChange({ target }) {
    const { checked } = target;

    this.setState({ bookmarkedOnly: checked });
  }

  handleSelectedGenreChange({ target }) {
    const { value } = target;

    this.setState({ selectedGenre: value });
  }

  moviesFilter() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    const filtering = movies.filter((movie) => {
      const { title, subtitle, storyline, bookmarked, genre } = movie;

      const searchBool = searchText !== '' ? (title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText))
        : true;
      const bookmarkBool = bookmarkedOnly ? bookmarked : true;
      const genreBool = genre.includes(selectedGenre);

      return (searchBool && bookmarkBool && genreBool);
    });
    return filtering;
  }

  render() {
    const { handleTextChange, handleBookmarkedChange, handleSelectedGenreChange } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleSelectedGenreChange }
        />
        <MovieList movies={ this.moviesFilter() } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
