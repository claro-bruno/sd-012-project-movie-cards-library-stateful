import React from 'react';

class Image extends React.Component {
  render() {
    const {
      name,
      value,
      onChange
    } = this.props;

    return (
      <label htmlFor="add-image" data-testid="image-input-label">
        Imagem
        <input
          id="add-image"
          data-testid="image-input"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Image;