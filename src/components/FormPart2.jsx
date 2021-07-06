import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import Select from './Select';

class FormPart2 extends Component {
  render() {
    const { state, handleChange } = this.props;
    const { rating, genre } = state;
    return (
      <div>
        <Inputs
          label="Avaliação"
          labelTestId="rating-input-label"
          inputName="rating"
          inputType="number"
          inputTestId="rating-input"
          inputValue={ rating }
          inputOnChange={ handleChange }
        />
        <Select
          selectLabel="Gênero"
          selectLabelTestId="genre-input-label"
          selectName="genre"
          selectTestId="genre-input"
          selectValue={ genre }
          selectOnChange={ handleChange }
        />
      </div>
    );
  }
}

FormPart2.propTypes = {
  state: PropTypes.shape({
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    genre: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormPart2;
