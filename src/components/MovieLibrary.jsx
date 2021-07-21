import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarked: false,
      selectedGenre: '',
      movies: [],
    };
    this.titleInputCallBack = this.titleInputCallBack.bind(this);
    this.bookmarkCallBack = this.bookmarkCallBack.bind(this);
    this.selectGenreCallBack = this.selectGenreCallBack.bind(this);
    this.MovieCallBack = this.MovieCallBack.bind(this);
  }

  componentDidMount() {
    const myMovies = this.state;
    const { movies } = this.props;
    movies.forEach((element) => {
      myMovies.push(element);
    });
  }

  titleInputCallBack(event) {
    this.setState({ searchText: event.target.value });
  }

  bookmarkCallBack(event) {
    this.setState({ bookmarked: event.target.value });
  }

  selectGenreCallBack(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  MovieCallBack(newMovie) {
    console.log(newMovie);
    const { movies } = this.state;
    movies.push(newMovie);
  }

  render() {
    const { searchText, selectedGenre, bookmarked } = this.state;
    return (
      <div className="App">
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.titleInputCallBack }
          bookmarkedOnly={ bookmarked }
          onBookmarkedChange={ this.bookmarkCallBack }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectGenreCallBack }
        />
        <AddMovie
          callback={ this.MovieCallBack }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieLibrary;
