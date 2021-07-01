import React from 'react';

class Formlabelimage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          id="image"
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Formlabelimage;
