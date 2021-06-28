import React from 'react';
import PropTypes from 'prop-types';

class ImportSubtitle extends React.Component {
  render() {
    const { handleChange, imagePath } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          id="imagePath"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImportSubtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default ImportSubtitle;
