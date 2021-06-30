import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="number" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            value={ value }
            onChange={ onChange }
            name="rating"
          />
        </label>
      </div>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingInput;
