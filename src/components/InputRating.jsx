import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputRating extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          id="rating"
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
