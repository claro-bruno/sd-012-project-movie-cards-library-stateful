import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { name, value, onChange, text, options } = this.props;
    return (
      <label htmlFor={ name } data-testid="select-input-label">
        { text }
        <select
          data-testid="select-input"
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
        >
          { options.map((option) => (
            <option
              data-testid="select-option"
              value={ option.value }
              key={ option.text }
            >
              { option.text }
            </option>))}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(
    { value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default SelectInput;
