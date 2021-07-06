import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const {
      name,
      value,
      onChange,
    } = this.props;

    return (
      <label htmlFor="add-rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="add-rating"
          data-testid="rating-input"
          type="number"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Rating;
