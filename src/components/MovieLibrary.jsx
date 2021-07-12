import React from 'react';
import PropTypes from 'prop-types';
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
    this.onClick = this.onClick.bind(this);
    this.filterMovies = this.filterMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  /**
  * Consultei o repositório do ryanlaiber para resolver essa parte.
  * https://github.com/tryber/sd-012-project-movie-cards-library-stateful/blob/ryan-laiber-movie-cards-library-stateful/src/components/MovieLibrary.jsx
  */
 
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

  onClick(objMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, objMovie],
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filtered = movies.map((movie) => {
      const { title, subtitle, storyline, bookmarked, genre } = movie;
      if (bookmarkedOnly && (title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText))) {
        if (genre.includes(selectedGenre) && bookmarked) {
          return movie;
        }
      } else if ((title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText))
      && genre.includes(selectedGenre)) {
        return movie;
      }
      return undefined;
    });
    return filtered.filter((element) => element !== undefined);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { onBookmarkedChange, onSearchTextChange,
      onSelectedGenreChange, filterMovies, onClick } = this;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ onSearchTextChange }
          onBookmarkedChange={ onBookmarkedChange }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ filterMovies() } />
        <AddMovie onClick={ onClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
