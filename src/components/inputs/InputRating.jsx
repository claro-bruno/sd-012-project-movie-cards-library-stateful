import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="addRating" data-testid="rating-input-label">
        Avaliação
        <input
          id="addRating"
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ value }
          onChange={ onChange }
          className="form-control"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
