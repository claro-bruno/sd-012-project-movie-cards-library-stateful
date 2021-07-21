import React, { Component } from 'react';

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
  valueSelect: Proptypes.string.isRequired,
  selectChange: Proptypes.func.isRequired,
  dataTestId: Proptypes.string.isRequired,
  labelText: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  dataTestIdOptions: Proptypes.string.isRequired,
  options: Proptypes.arrayOf(Proptypes.shape({
    value: Proptypes.string,
    text: Proptypes.string,
  })).isRequired,
};

export default Select;
