import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

function MovieLibrary({ movies: dale }) {
  const [searchText, setSearchText] = useState('');
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState([...dale]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (bookmarkedOnly) {
      setFilteredMovies(movies.filter((e) => e.bookmarked));
    } else if (selectedGenre !== '') {
      setFilteredMovies(movies.filter((e) => e.genre === selectedGenre));
    } else if (searchText !== '') {
      setFilteredMovies(movies.filter(
        (e) => e.title.toUpperCase().includes(searchText.toUpperCase())
          || e.storyline.toUpperCase().includes(searchText.toUpperCase())
          || e.subtitle.toUpperCase().includes(searchText.toUpperCase()),
      ));
    } else {
      setFilteredMovies(movies);
    }
  }, [searchText, bookmarkedOnly, selectedGenre, movies]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <h2> My awesome movie library </h2>
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ ({ target }) => setSearchText(target.value) }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ ({ target }) => setBookmarkedOnly(target.checked) }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ ({ target }) => setSelectedGenre(target.value) }
      />
      <MovieList movies={ filteredMovies } />
      <AddMovie onClick={ addMovie } />
    </div>
  );
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
