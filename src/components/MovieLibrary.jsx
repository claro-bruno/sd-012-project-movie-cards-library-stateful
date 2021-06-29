import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      onlyFavorites: false,
      genre: '',
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
    const { searchText, onlyFavorites, genre } = this.state;
    const { movies } = this.props;
    return (
      <section>
        <SearchBar
          onSearchTextChange={ this.handleChanger }
          searchText={ searchText }
          onBookmarkedChange={ this.handleChanger }
          onSelectedGenreChange={ this.handleChanger }
          bookmarkedOnly={ onlyFavorites }
          selectedGenre={ genre }
        />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
