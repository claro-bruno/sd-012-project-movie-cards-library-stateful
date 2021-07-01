import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
// import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    const moviesList = movies;

    const initialState = {
      searchText: '',
      bookmarkedOnly: false,
      selectGenre: '',
      movies: moviesList,
    };

    this.state = initialState;
  }

  callBack = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.callBack }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.callBack }
          selectGenre={ selectGenre }
          onSelectedGenreChange={ this.callBack }
        />
        <MovieList movies={ movies } />
        {/* <AddMovie /> */}
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
