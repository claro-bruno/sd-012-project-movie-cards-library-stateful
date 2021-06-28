import React from 'react';

class GenericInput extends React.Component {
  render() {
    const { name, value, dataId, onChange, type } = this.props;
    return (
      <input
        type={ type }
        value={ value }
        data-testid={ dataId }
        onChange={ onChange }
      />
    );
  }
}

export default GenericInput;
