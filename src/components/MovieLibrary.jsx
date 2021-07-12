// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component{
  constructor({ movies }) {
    super();

    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '' ,
      movies: movies
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    const name = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render() {  
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSonSearchTextChange={this.handleChange}
          bookMarkedOnly={this.state.bookMarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
      </div>
    )
  }
}

export default MovieLibrary;