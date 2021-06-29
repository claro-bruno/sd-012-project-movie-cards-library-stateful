import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText = '', bookmarkedOnly, selectedGenre = '' } = this.props;
    // console.log(movies);
    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          .reduce((acc, cur) => {
            const { title, subtitle, storyline } = cur;

            if (title.toLowerCase().includes(searchText.toLowerCase())
              || subtitle.toLowerCase().includes(searchText.toLowerCase())
              || storyline.toLowerCase().includes(searchText.toLowerCase())) {
              acc.push(cur);
            }

            if (bookmarkedOnly) {
              acc = acc.filter(({ bookmarked }) => bookmarked);
            }

            if (selectedGenre !== '') {
              acc = acc.filter(({ genre }) => genre === selectedGenre);
            }

            return acc;
          }, [])
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieList;
