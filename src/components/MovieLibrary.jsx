// implement MovieLibrary component here
import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.changeHandler = this.changeHandler.bind(this);
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: movies,
    };
  }

  changeHandler(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeHandler }
        />
        <AddMovie
          onClick={ () => {} }
        />
      </div>
    );
  }
}

export default MovieLibrary;
