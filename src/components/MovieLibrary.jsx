import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onTextChangeSearch = this.onTextChangeSearch.bind(this);
    this.onBookmarkedOnlySearch = this.onBookmarkedOnlySearch.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSelectedGenreChange({ target }) { // atualiza estado de selectedGenre a partir do value passado em <options>
    this.setState({
      selectedGenre: target.value,
    });
  }

  onTextChangeSearch({ target }) {
    console.log(target.value);
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedOnlySearch() {
    const { bookmarkedOnly } = this.state;
    if (!bookmarkedOnly) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.state({
        bookmarkedOnly: false,
      });
    }
  }

  render() {
    const { onTextChangeSearch, onBookmarkedOnlySearch, onSelectedGenreChange } = this;
    const { bookmarkedOnly, selectedGenre, searchText, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onTextChangeSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedOnlySearch={ onBookmarkedOnlySearch }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
        teste
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
