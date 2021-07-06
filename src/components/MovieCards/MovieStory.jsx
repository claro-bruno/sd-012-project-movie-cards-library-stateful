import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieStory extends Component {
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

export default MovieStory;

MovieStory.propTypes = {
  story: PropTypes.string.isRequired,
  onStoryTextChange: PropTypes.func.isRequired,
};
