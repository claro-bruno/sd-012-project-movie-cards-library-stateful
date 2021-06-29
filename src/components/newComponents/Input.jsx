import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Input extends Component {
  render() {
    const { dataId, type, name, message, onChange, value, checked } = this.props;
    return (
      <label data-testId={ ` ${dataId}-input-label` } htmlFor="labelInput">
        { message }
        <input
          name={ name }
          checked={ checked }
          onChange={ onChange }
          value={ value }
          id="labelInput"
          type={ type }
          data-testId={ `${dataId}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  dataId: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
  checked: Proptypes.bool.isRequired,
};

export default Input;
