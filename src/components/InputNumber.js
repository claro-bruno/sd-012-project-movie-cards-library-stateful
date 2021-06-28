import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputNumber extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input type="number" data-testid="rating-input" defaultValue={ rating } />
        </label>
      </div>
    );
  }
}

InputNumber.propTypes = {
  rating: PropTypes.number.isRequired,
};
