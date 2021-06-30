import React from 'react';
import PropTypes from 'prop-types';

class Appraisal extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating-input"
      >
        Avaliação
        <input
          type="number"
          value={ value }
          name="rating"
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}
Appraisal.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
export default Appraisal;
