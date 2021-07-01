import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        >
          { storyline }
        </textarea>
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Storyline;
