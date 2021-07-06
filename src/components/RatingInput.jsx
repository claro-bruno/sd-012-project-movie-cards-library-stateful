import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          id="rating-input"
          data-testid="rating-input"
          type="number"
          step=".1"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
RatingInput.defaultProps = {
  value: '',
};

export default RatingInput;
