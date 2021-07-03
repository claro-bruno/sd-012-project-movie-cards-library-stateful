import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...props.movies],
    };
    this.handleChanger = this.handleChanger.bind(this);
    this.onClick = this.onClick.bind(this);
    this.funcFilter = this.funcFilter.bind(this);
  }

  handleChanger({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onClick(state) {
    const { movies } = this.state;
    if (state.imagePath === '') {
      state.imagePath = 'https://lh3.googleusercontent.com/proxy/wO5eD5QOf9kPzfhz2MXJUkkJgQ7yYzZ8NCbQ5fGOT5Dy04tqUUpa9vVU4ry_kq6zB3SM3YvBTl1aXoDZLKcdk2vmF9lijXQFm8GHJkx_6X3t2ynvOI64d4O84FDydMQoeuXlYyE0-n7KQ04gvamzWGSCVIz3g9oZlRdMGXwWyNlhpH2KWxgg';
    }
    this.setState({
      movies: [...movies, state],
    });
  }

  funcFilter() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    return (movies.filter((movie) => (
      (movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
      && (bookmarkedOnly ? movie.bookmarked : true)
      && movie.genre.includes(selectedGenre))));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar
          onSearchTextChange={ this.handleChanger }
          searchText={ searchText }
          onBookmarkedChange={ this.handleChanger }
          onSelectedGenreChange={ this.handleChanger }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ this.funcFilter() } />
        <AddMovie onClick={ this.onClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
