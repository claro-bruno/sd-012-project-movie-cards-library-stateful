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
      selectedGenre: 'action',
      movies,
    };
  }

    filerFavorites = () => {
      const { movies } = this.props;
      const filtered = movies.filter((movie) => {
        const { bookmarkedOnly } = this.state;
        return !bookmarkedOnly ? movie.bookmarked === bookmarkedOnly : true;
      });
      this.setState({ movies: filtered });
    }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleCheckboxChange = ({ target }) => {
    const { checked } = target;
    if (checked) {
      this.setState({ bookmarkedOnly: true });
    } else {
      this.setState({ bookmarkedOnly: false });
    }
    this.filerFavorites();
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main className="main">
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleCheckboxChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ () => 'test' } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
