import React from 'react';

class InputRender extends React.Component {
  render() {
    const { name, nome, initValue, onChange, type } = this.props;
    return (
      <label
        data-testid={ `${name}-input-label` }
        htmlFor={ `label-${name}` }
      >
        { nome }
        <input
          data-testid={ `${name}-input` }
          type={ type }
          name={ name }
          value={ initValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default InputRender;
