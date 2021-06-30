import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaStoryline extends Component {
  render() {
    const {
      storyline,
      handleChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          type="text"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextAreaStoryline.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default TextAreaStoryline;
