import React from 'react';
import PropTypes from 'prop-types';

class InputNumb extends React.Component {
  render() {
    const { name, value, testIdLabel, labelText, testid, onChange } = this.props;
    return (
      <label data-testid={ testIdLabel } htmlFor={ testid }>
        { labelText }
        <input
          type="number"
          name={ name }
          value={ value }
          data-testid={ testid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputNumb.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  testIdLabel: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumb;
