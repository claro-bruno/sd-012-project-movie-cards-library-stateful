import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryLine extends React.Component {
  render() {
    const { story, onStoryTextChange } = this.props;
    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          name="storyline"
          value={ story }
          onChange={ onStoryTextChange }
        />
      </label>
    );
  }
}

export default AddMovieStoryLine;

AddMovieStoryLine.propTypes = {
  story: PropTypes.string.isRequired,
  onStoryTextChange: PropTypes.func.isRequired,
};
