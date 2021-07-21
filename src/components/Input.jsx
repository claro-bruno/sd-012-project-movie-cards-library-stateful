import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Input extends Component {
  render() {
    const { labelText, dataTestId, valueText, onTextChange, name } = this.props;
    return (
      <section>
        <label htmlFor={ dataTestId } data-testid={ `${dataTestId}-label` }>
          {labelText}
          <input
            id={ dataTestId }
            name={ name }
            data-testid={ dataTestId }
            type="text"
            value={ valueText }
            onChange={ onTextChange }
          />
        </label>
      </section>
    );
  }
}

Input.propTypes = {
  valueText: Proptypes.string.isRequired,
  onTextChange: Proptypes.func.isRequired,
  dataTestId: Proptypes.string.isRequired,
  labelText: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
};

export default Input;
