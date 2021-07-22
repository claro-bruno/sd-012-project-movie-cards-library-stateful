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
    this.filtro = this.filtro.bind(this);
  }

  // feito com ajuda do colega Julio Barros
  mudaEstado(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  // feito com ajuda do colega Julio Barros
  filtro() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filtraTexto = movies.filter((item) => (searchText
      ? item.title.toLowerCase().includes(searchText.toLocaleLowerCase())
      || item.subtitle.toLowerCase().includes(searchText.toLocaleLowerCase())
      || item.storyline.toLowerCase().includes(searchText.toLocaleLowerCase()) : movies));
    const filtraFavorito = filtraTexto.filter((item) => (bookmarkedOnly
      ? item.bookmarked === true : filtraTexto));
    const filtraGenero = filtraFavorito.filter((item) => (selectedGenre
      ? item.genre === selectedGenre : filtraFavorito));
    return filtraGenero;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={ this.filtro() } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibray.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieLibray;
