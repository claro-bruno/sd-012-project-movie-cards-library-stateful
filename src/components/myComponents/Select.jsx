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
  dataLabelId: PropTypes.string,
  htmlForId: PropTypes.string,
  labelInput: PropTypes.string,
  selectId: PropTypes.string,
  selectValue: PropTypes.string,
  selectOnChange: PropTypes.func,
  optionId: PropTypes.string,
};

// Select.defaultProps = {
//   dataLabelId: '',
//   htmlForId: '',
//   labelInput: '',
//   selectId: '',
//   selectValue: '',
//   selectOnChange: '',
//   optionId: '',
// };

export default Select;
