import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { data } = this.props;

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      data,
      // newMovieList: data,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClickButtonAdd(newMovie) {
    console.log(newMovie);

    // const { newMovieList, data } = this.state;
    // const moviesList = [...newMovieList, data];
    // this.setState({
    //   data: moviesList,
    //   newMovieList: moviesList,
    // }, () => this.filterMovies());
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, data } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ data } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
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
