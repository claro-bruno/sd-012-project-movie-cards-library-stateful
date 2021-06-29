import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { name, value, testIdLabel, labelText, testid, onChange, options } = this.props;
    return (

      <label htmlFor={ testid } data-testid={ testIdLabel }>
        { labelText }
        <select
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ testid }
        >
          { { options }.map((option) => (
            <option key={ option } value={ option }>
              { option }
            </option>))}
        </select>
      </label>);
  }
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testIdLabel: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: Proptypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectInput;
