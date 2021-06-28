import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, newCard } = this.props;
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <input
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ newCard }
          data-testid="storyline-input"
          id="image"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  newCard: PropTypes.func.isRequired,
};

export default Storyline;
