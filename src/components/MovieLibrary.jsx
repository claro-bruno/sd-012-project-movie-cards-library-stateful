import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.findMovie = this.findMovie.bind(this);
    this.addMovieCard = this.addMovieCard.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookmakedOnlyChange = this.bookmakedOnlyChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
  }

  findMovie() {
    let findMovies = '';
    const { searchText, movies } = this.state;
    if (searchText.length < 1) {
      const { movies: propMovies } = this.props;
      this.setState({ movies: propMovies });
      return;
    }
    findMovies = movies.filter(({ title, subtitle, storyline }) => (
      `${title}${subtitle}${storyline}`.includes(searchText)
    ));
    this.setState({ movies: findMovies });
  }

  addMovieCard(props) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, props] });
  }

  searchTextChange({ target }) {
    this.setState({ searchText: target.value }, this.findMovie);
  }

  bookmakedOnlyChange({ target }) {
    const { movies } = this.state;
    this.setState({ bookmarkedOnly: target.checked }, () => {
      this.setState({ movies: movies.filter(({ bookmarked }) => bookmarked) });
    });
  }

  selectedGenreChange({ target }) {
    const { movies } = this.state;
    this.setState({ selectedGenre: target.value }, () => {
      const { selectedGenre } = this.state;
      this.setState({ movies: movies.filter((e) => e.genre === selectedGenre) });
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          searchTextChange={ this.searchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          bookmakedOnlyChange={ this.bookmakedOnlyChange }
          selectedGenre={ selectedGenre }
          selectedGenreChange={ this.selectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onclick={ this.addMovieCard } />
      </>
    );
  }
}

export default MovieLibrary;
