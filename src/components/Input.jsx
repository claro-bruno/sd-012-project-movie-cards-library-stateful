import React from 'react';

class Input extends React.Component {
  render() {
    const = { label, name, type, value, onChange } = this.props
    return (
      <label>
        { label }
        <input
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Input;