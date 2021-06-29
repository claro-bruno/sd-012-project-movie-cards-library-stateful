import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Input extends Component {
  render() {
    const { dataId, message, onChange, value, checked } = this.props;
    return (
      <label data-testId={ ` ${dataId}-input-label` } htmlFor="labelInput">
        { message }
        <input
          checked={ checked }
          onChange={ onChange }
          value={ value }
          id="labelInput"
          type={ dataId }
          data-testId={ ` ${dataId}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  dataId: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
  checked: Proptypes.bool.isRequired,
};

export default Input;
