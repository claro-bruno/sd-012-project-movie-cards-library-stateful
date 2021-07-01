import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryLine extends Component {
  render() {
    const { storyline, onChangeStory } = this.props;
    return (
      <label
        htmlFor="storyline-input-label"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ onChangeStory }
        />
      </label>
    );
  }
}

AddMovieStoryLine.propTypes = {
  storyline: PropTypes.string,
  onChangeStory: PropTypes.string,
}.isRequired;

export default AddMovieStoryLine;
