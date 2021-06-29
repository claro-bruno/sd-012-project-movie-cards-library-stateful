import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
      title,
      subtitle,
      imagePath,
      storyLine,
      rating,
      genre,
      onClick,
      onSearchTextChange,
      handleChange,
    } = this.props;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          storyLine={ storyLine }
          rating={ rating }
          genre={ genre }
          onClick={ onClick }
          handleChange={ handleChange }
        />
      </>
    );
  }
}

MovieLibrary.propTypes = ({
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyLine: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}).isRequired;

export default MovieLibrary;
