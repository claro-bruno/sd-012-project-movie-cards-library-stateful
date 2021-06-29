import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from './addBarInputs/Title';
import Subtitle from './addBarInputs/Subtitle';
import ImagePath from './addBarInputs/ImagePath';
import StoryLine from './addBarInputs/Storyline';
import Rating from './addBarInputs/Rating';
import Genre from './addBarInputs/Genre';
import AddButton from './addBarInputs/AddButton';

function AddMovie({ onClick }) {
  const [subtitle, setSubtitle] = useState('');
  const [title, setTitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [storyline, setStoryLine] = useState('');
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState('action');

  const clear = () => {
    const newMovie = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    };
    onClick(newMovie);
    setSubtitle('');
    setTitle('');
    setImagePath('');
    setStoryLine('');
    setRating(0);
    setGenre('Action');
  };
  return (
    <form data-testid="add-movie-form">
      <Title title={ title } inputHandler={ ({ target }) => setTitle(target.value) } />
      <Subtitle
        subtitle={ subtitle }
        inputHandler={ ({ target }) => setSubtitle(target.value) }
      />
      <ImagePath
        imagePath={ imagePath }
        inputHandler={ ({ target }) => setImagePath(target.value) }
      />
      <StoryLine
        storyline={ storyline }
        inputHandler={ ({ target }) => setStoryLine(target.value) }
      />
      <Rating
        rating={ rating }
        inputHandler={ ({ target }) => setRating(Number(target.value)) }
      />
      <Genre genre={ genre } inputHandler={ ({ target }) => setGenre(target.value) } />
      <AddButton clear={ clear } />
    </form>
  );
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
