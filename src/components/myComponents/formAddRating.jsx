import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormAddRating extends Component {
  render() {
    const {
      inputName,
      dataLabelId,
      labelText,
      dataFormId2,
      inputType,
      inputValue,
      inputOnChange,
      htmlForId,
    } = this.props;
    return (
      <label data-testid={ dataLabelId } htmlFor={ htmlForId }>
        { labelText }
        <input
          id={ htmlForId }
          name={ inputName }
          data-testid={ dataFormId2 }
          type={ inputType }
          value={ inputValue }
          onChange={ inputOnChange }
        />
      </label>
    );
  }
}

FormAddRating.propTypes = {
  inputName: PropTypes.string,
  dataLabelId: PropTypes.string,
  labelText: PropTypes.string,
  dataFormId2: PropTypes.string,
  inputType: PropTypes.string,
  inputValue: PropTypes.string,
  inputOnChange: PropTypes.func,
  htmlForId: PropTypes.string,
};

FormAddRating.defaultProps = {
  inputName: '',
  dataLabelId: '',
  labelText: '',
  dataFormId2: '',
  inputType: '',
  inputValue: '0',
  inputOnChange: PropTypes.func,
  htmlForId: '',
};

export default FormAddRating;
