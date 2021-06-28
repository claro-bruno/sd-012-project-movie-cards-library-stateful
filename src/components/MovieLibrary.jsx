import React from 'react';
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
    }
  }
  adicionarFilme = (objMovies) => {
    this.setState(({ movies }) => ({
      movies: [...movies, objMovies],
    }));
  }
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  getMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let result = movies.filter(({ title, subtitle, storyline, genre }) => (
      (title.includes(searchText) || 
        subtitle.includes(searchText) || 
        storyline.includes(searchText))
        && (selectedGenre === '' || genre === selectedGenre)
    ));
    if (bookmarkedOnly) result = result.filter((movie) => movie.bookmarked);
    return result;
  }
	render() {
    const filtro = this.getMovies();
    console.log(filtro)
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          movies={ movies }
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <AddMovie onClick={ this.adicionarFilme } />
        <MovieList movies={ filtro } />
      </div>
    )
  }
}

export default MovieLibrary;