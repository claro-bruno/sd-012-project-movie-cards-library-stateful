import React from 'react';
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
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.string.isRequired,
};

export default InputTitle;
