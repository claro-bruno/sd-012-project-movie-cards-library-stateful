import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

class Select extends Component {
  render() {
    const {
      inputLabel,
      onChange,
      inputValue,
      dataTestId,
      inputLabelId,
      name,
    } = this.props;
    return (
      <label htmlFor={ inputLabelId } data-testid={ inputLabelId }>
        {inputLabel}
        <select
          id={ inputLabelId }
          data-testid={ dataTestId }
          value={ inputValue }
          onChange={ onChange }
          name={ name }
        >
          <Option value="" name="Todos" dataId="select-option" />
          <Option value="action" name="Ação" dataId="select-option" />
          <Option value="comedy" name="Comédia" dataId="select-option" />
          <Option value="thriller" name="Suspense" dataId="select-option" />
        </select>
      </label>
    );
  }
}

Select.propTypes = PropTypes.shape({
  inputLabel: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;

export default Select;
