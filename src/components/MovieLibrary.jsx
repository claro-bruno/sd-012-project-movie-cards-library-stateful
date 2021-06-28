import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }

    this.handleSearchEvent = this.handleSearchEvent.bind(this);
    this.handleBookmarkedEvent = this.handleBookmarkedEvent.bind(this);
    this.handleGenreEvent = this.handleGenreEvent.bind(this);
  }

  handleSearchEvent(e) {
    const { value } = e.target;

    this.setState({ searchText: value });
  }

  handleBookmarkedEvent(e) {
    const { checked } = e.target;
    
    this.setState({ bookmarkedOnly: checked});
  }

  handleGenreEvent(e) {
    const { value } = e.target;

    this.setState({ selectedGenre: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { handleSearchEvent, handleBookmarkedEvent, handleGenreEvent } = this;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ handleSearchEvent }
          onBookmarkedChange={ handleBookmarkedEvent }
          onSelectedGenreChange={ handleGenreEvent }
        />
      </section>
    );
  }
}

export default MovieLibrary;