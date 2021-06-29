import React from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    if (checked) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filtered = movies.filter((movie) => {
      const { title, subtitle, storyline, bookmarked, genre } = movie;
      if (bookmarkedOnly) {
        if (title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)) {
          if (genre.includes(selectedGenre)) {
            if (bookmarked) {
              return movie;
            }
          }
        }
      } else if (title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText)) {
        if (genre.includes(selectedGenre)) {
          return movie;
        }
      }
    });
    return filtered;
  }

  onClick() {
    console.log(this.state);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={this.onClick} />
      </section>
    );
  }
}

export default MovieLibrary;
