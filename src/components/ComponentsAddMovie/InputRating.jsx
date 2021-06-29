import React from 'react';
import PropTypes from 'prop-types';
import Input from '../ComponentsCriados/Input';

class InputRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <Input
        type="number"
        datatestid="rating-input"
        name="rating"
        value={ rating }
        onChange={ handleChange }
        labelText="Avaliação"
        datatestidLabel="rating-input-label"
      />
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputRating;
