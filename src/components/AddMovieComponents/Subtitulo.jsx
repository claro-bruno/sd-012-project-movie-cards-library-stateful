import React from 'react';

class Subtitulo extends React.Component {
  render() {
    const { name, value, onChange } = this.props;

    return (
      <label htmlFor="add-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="add-subtitle"
          data-testid="subtitle-input"
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Subtitulo;
