import React, { Component } from 'react';
import PropType from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibray extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.mudaEstado = this.mudaEstado.bind(this);
  }

  mudaEstado(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.mudaEstado }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.mudaEstado }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.mudaEstado }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibray.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieLibray;
