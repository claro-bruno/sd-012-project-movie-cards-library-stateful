import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      dataLabelId,
      htmlForId,
      labelInput,
      selectId,
      selectValue,
      selectOnChange,
      optionId,
    } = this.props;
    return (
      <label data-testid={ dataLabelId } htmlFor={ htmlForId }>
        { labelInput }
        <select
          id={ htmlForId }
          data-testid={ selectId }
          value={ selectValue }
          onChange={ selectOnChange }
        >
          <option data-testid={ optionId } value="">
            Todos
          </option>
          <option data-testid={ optionId } value="action">
            Ação
          </option>
          <option data-testid={ optionId } value="comedy">
            Comédia
          </option>
          <option data-testid={ optionId } value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  dataLabelId: PropTypes.string.isRequired,
  htmlForId: PropTypes.string.isRequired,
  labelInput: PropTypes.string.isRequired,
  selectId: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  selectOnChange: PropTypes.func.isRequired,
  optionId: PropTypes.string.isRequired,
};

export default Select;
