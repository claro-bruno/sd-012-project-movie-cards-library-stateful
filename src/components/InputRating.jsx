import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, handleClick } = this.props;
    return (
      <label htmlFor="input-rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          id="input-rating"
          data-testid="rating-input"
          value={ value }
          onChange={ handleClick }
        />
      </label>
    );
  }
}
InputRating.propTypes = {
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default InputRating;
