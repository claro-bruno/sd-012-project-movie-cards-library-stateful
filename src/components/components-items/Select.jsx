import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

class Select extends React.Component {
  render() {
    const {
      inputLabel,
      onChangeSelect,
      inputValue,
      inputDataTestId,
      inputLabelId,
      name,
    } = this.props;
    return (
      <label htmlFor={ inputLabelId } data-testid={ inputLabelId }>
        {inputLabel}
        <select
          id={ inputLabelId }
          data-testid={ inputDataTestId }
          value={ inputValue }
          onChange={ onChangeSelect }
          name={ name }
        >
          <SelectOption value="" optionName="Todos" dataId="select-option" />
          <SelectOption value="action" optionName="Ação" dataId="select-option" />
          <SelectOption value="comedy" optionName="Comédia" dataId="select-option" />
          <SelectOption value="thriller" optionName="Suspense" dataId="select-option" />
        </select>
      </label>
    );
  }
}

Select.propTypes = PropTypes.shape({
  inputLabel: PropTypes.string.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
}).isRequired;

export default Select;
