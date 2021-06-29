import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieComponents/Title';
import Subtitle from './AddMovieComponents/Subtitle';
import ImagePath from './AddMovieComponents/ImagePath';
import StoryLine from './AddMovieComponents/StoryLine';
import RatingComponent from './AddMovieComponents/RatingComponent';
import Genre from './AddMovieComponents/Genre';
import Button from './AddMovieComponents/Button';

class AddMovie extends React.Component {
  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
      handleChange,
      onClick,
    } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ handleChange } />
        <ImagePath imagePath={ imagePath } handleChange={ handleChange } />
        <StoryLine storyLine={ storyLine } handleChange={ handleChange } />
        <RatingComponent rating={ rating } handleChange={ handleChange } />
        <Genre genre={ genre } handleChange={ handleChange } />
        <Button onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = ({
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyLine: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}).isRequired;

export default AddMovie;
