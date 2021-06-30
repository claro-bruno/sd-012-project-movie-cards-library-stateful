import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;

    return (
      <label htmlFor="blabla" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputRating;
