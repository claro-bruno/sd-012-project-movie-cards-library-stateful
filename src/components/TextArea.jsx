import React, { Component } from 'react';
import Proptypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { labelText, dataTestId, valueText, onTextChange, name } = this.props;
    return (
      <section>
        <label htmlFor={ dataTestId } data-testid={ `${dataTestId}-label` }>
          {labelText}
          <textarea
            id={ dataTestId }
            name={ name }
            data-testid={ dataTestId }
            value={ valueText }
            onChange={ onTextChange }
          />
        </label>
      </section>
    );
  }
}

TextArea.propTypes = {
  valueText: Proptypes.string.isRequired,
  onTextChange: Proptypes.func.isRequired,
  dataTestId: Proptypes.string.isRequired,
  labelText: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
};

export default TextArea;
