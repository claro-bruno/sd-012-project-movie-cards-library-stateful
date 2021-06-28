import React from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends React.Component {
  render() {
    const {
      labelText,
      LabelDataTestid,
      InputDataTestid,
      name,
      value,
      onChange,
    } = this.props;
    return (
      <label data-testid={ LabelDataTestid } htmlFor={ InputDataTestid }>
        {labelText}
        <textarea
          data-testid={ InputDataTestid }
          name={ name }
          value={ value }
          id={ InputDataTestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  labelText: PropTypes.string.isRequired,
  InputDataTestid: PropTypes.string.isRequired,
  LabelDataTestid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextArea;
