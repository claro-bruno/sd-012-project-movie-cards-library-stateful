import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

class Select extends Component {
  render() {
    const {
      labelText,
      dataTestIdLabel,
      name,
      id,
      dataTestIdInput,
      value,
      handleChange,
      options,
    } = this.props;
    return (
      <label htmlFor={ id } data-testid={ dataTestIdLabel }>
        { labelText }
        <select
          name={ name }
          id={ id }
          data-testid={ dataTestIdInput }
          value={ value }
          onChange={ handleChange }
        >
          { options.map((option) => (
            <Option
              key={ option.value }
              value={ option.value }
              dataTestId={ option.dataTestId }
              text={ option.text }
            />
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  dataTestIdLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestIdInput: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    dataTestId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Select;
