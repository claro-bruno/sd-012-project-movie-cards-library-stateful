import React from 'react';
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
      movies: { ...props.movies },
    };
    this.handleChanger = this.handleChanger.bind(this);
  }

  handleChanger({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
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
        <MovieList movies={ movies }/>
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
