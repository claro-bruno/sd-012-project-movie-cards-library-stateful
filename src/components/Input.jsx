import React from 'react';

class Input extends React.Component {
  render() {
    const { id, name, type, placeholder, labelText, value, onChange, testeid, checked } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${testeid}-label` }>
        {labelText}
        <input
          id={ id }
          data-testid={ testeid }
          name={ name }
          type={ type }
          placeholder={ placeholder }
          onChange={ onChange }
          value={ value }
          checked={ checked }
        />
      </label>
    );
  }
}

export default Input;
