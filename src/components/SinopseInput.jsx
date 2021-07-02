import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SinopseInput extends Component {
  render() {
    const { sinopse, method } = this.props;
    return (
      <label htmlFor="add-movie-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="add-movie-sinopse"
          data-testid="storyline-input"
          value={ sinopse }
          onChange={ method }
        />
      </label>
    );
  }
}

SinopseInput.propTypes = {
  sinopse: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
};

export default SinopseInput;
