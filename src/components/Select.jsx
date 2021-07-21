import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      name,
      dataTestId,
      labelText,
      valueSelect,
      selectChange,
      dataTestIdOptions,
      options,
    } = this.props;
    return (
      <section>
        <label htmlFor={ dataTestId } data-testid={ `${dataTestId}-label` }>
          {labelText}
          <select
            name={ name }
            data-testid={ dataTestId }
            value={ valueSelect }
            onChange={ selectChange }
          >
            {options.map((
              option,
            ) => (
              <option
                data-testid={ dataTestIdOptions }
                value={ option.value }
                key={ option.text }
              >
                {option.text}
              </option>))}

          </select>
        </label>
      </section>
    );
  }
}
Select.propTypes = {
  valueSelect: PropTypes.string.isRequired,
  selectChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestIdOptions: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default Select;
