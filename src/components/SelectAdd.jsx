import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

class SelectAdd extends Component {
  render() {
    const {
      inputLabel,
      onChange,
      inputValue,
      dataTestId,
      inputLabelId,
      name,
      dataId,
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
          <Option value="action" name="Ação" dataId={ dataId } />
          <Option value="comedy" name="Comédia" dataId={ dataId } />
          <Option value="thriller" name="Suspense" dataId={ dataId } />
        </select>
      </label>
    );
  }
}

SelectAdd.propTypes = PropTypes.shape({
  inputLabel: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;

export default SelectAdd;
