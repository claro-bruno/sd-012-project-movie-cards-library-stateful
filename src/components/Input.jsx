import React from 'react';

class Input extends React.Component {
  render() {
    const { dataTestidLabel, htmlFor, labelText, id, type,
      name, dataTestidInput, change, value, checked,
    } = this.props;
    return (
      <label
        data-testid={ dataTestidLabel }
        htmlFor={ htmlFor }
      >
        { labelText }
        <input
          id={ id }
          type={ type }
          name={ name }
          data-testid={ dataTestidInput }
          onChange={ change }
          value={ value }
          checked={ checked }
        />
      </label>
    );
  }
}

export default Input;
