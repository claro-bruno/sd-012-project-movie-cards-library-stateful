import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../generics/Input';

class InputRating extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <Input
        id="add-rating"
        dataTestidLabel="rating-input-label"
        dataTestidInput="rating-input"
        textLabel="Avaliação"
        onChange={ onChange }
        name="rating"
        value={ value }
        type="number"
      />
    );
  }
}

InputRating.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default InputRating;
