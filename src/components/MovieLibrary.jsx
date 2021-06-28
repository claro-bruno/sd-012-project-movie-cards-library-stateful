import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre:'',
      movies: props.movies,
    };
  }

  onChangeHandlerML({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  onClick(objeto) {
    console.log(objeto);
  }

  render() {
    const { props, state } = this;
    const { movies } = props;
    return (
      <div>
        <SearchBar
          searchText={ state.searchText }
          onSearchTextChange={ this.onChangeHandlerML }
          bookmarkedOnly= { state.bookmarkedOnly }
          onBookmarkedChange= { this.onChangeHandlerML }
          selectedGenre= { state.selectedGenre }
          onSelectedGenreChange = { this.onChangeHandlerML }
        />
        <MovieList />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
