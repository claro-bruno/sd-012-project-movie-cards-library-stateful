import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

class SelectForm extends React.Component {
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
          <SelectOption value="action" optionName="Ação" dataId="genre-option" />
          <SelectOption value="comedy" optionName="Comédia" dataId="genre-option" />
          <SelectOption value="thriller" optionName="Suspense" dataId="genre-option" />
        </select>
      </label>
    );
  }
}

SelectForm.propTypes = PropTypes.shape({
  inputLabel: PropTypes.string.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
}).isRequired;

export default SelectForm;
