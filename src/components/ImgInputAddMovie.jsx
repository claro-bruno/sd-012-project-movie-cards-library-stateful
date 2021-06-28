import React from 'react';
import PropTypes from 'prop-types';

class ImgInputAddMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    const LabelDataTestid = 'image-input-label';
    const InputDataTestid = 'image-input';
    return (
      <label data-testid={ LabelDataTestid } htmlFor={ InputDataTestid }>
        Imagem
        <input
          data-testid={ InputDataTestid }
          type="text"
          name="imagePath"
          value={ value }
          id={ InputDataTestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImgInputAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImgInputAddMovie;
