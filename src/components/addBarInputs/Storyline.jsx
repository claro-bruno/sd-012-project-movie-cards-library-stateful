import React from 'react';
import PropTypes from 'prop-types';

function StoryLine({ storyline, inputHandler }) {
  return (
    <label data-testid="storyline-input-label" htmlFor="storyLine">
      Sinopse
      <textarea
        id="storyLine"
        type="text"
        data-testid="storyline-input"
        value={ storyline }
        onChange={ (event) => inputHandler(event) }
      />
    </label>
  );
}

StoryLine.propTypes = {
  storyline: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
};

export default StoryLine;
