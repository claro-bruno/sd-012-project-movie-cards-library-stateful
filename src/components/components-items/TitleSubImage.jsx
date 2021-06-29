import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class TitleSubImage extends React.Component {
  render() {
    const { title, subtitle, imagePath, handleChange } = this.props;
    return (
      <div>
        <Input
          inputLabel="Título"
          inputDataTestId="title-input"
          inputLabelId="title-input-label"
          inputType="text"
          inputValue={ title }
          onChangeInput={ handleChange }
          name="title"
        />
        <Input
          inputLabel="Subtítulo"
          inputDataTestId="subtitle-input"
          inputLabelId="subtitle-input-label"
          inputType="text"
          inputValue={ subtitle }
          onChangeInput={ handleChange }
          name="subtitle"
        />
        <Input
          inputLabel="Imagem"
          inputDataTestId="image-input"
          inputLabelId="image-input-label"
          inputType="text"
          inputValue={ imagePath }
          onChangeInput={ handleChange }
          name="imagePath"
        />
      </div>
    );
  }
}

TitleSubImage.propTypes = PropTypes.shape({
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputDataTestId: PropTypes.string.isRequired,
  inputLabelId: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;

export default TitleSubImage;
