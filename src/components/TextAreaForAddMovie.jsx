import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaForAddMovie extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          id="storyline"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

TextAreaForAddMovie.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default TextAreaForAddMovie;
