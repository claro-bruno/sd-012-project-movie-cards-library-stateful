import React from 'react';
import PropTypes from 'prop-types';
import LabelInput from './LabelInput';

class AddMovieF1 extends React.Component {
  render() {
    const { state, handleChange } = this.props;
    const { title, subtitle, imagePath } = state;
    return (
      <div>
        <LabelInput
          id="input-text"
          dataTestidLabel="title-input-label"
          textLabel="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ handleChange }
          dataTestidInput="title-input"
        />
        <LabelInput
          id="input-subtitle"
          dataTestidLabel="subtitle-input-label"
          textLabel="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
          dataTestidInput="subtitle-input"
        />
        <LabelInput
          id="input-image"
          dataTestidLabel="image-input-label"
          textLabel="Imagem"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
          dataTestidInput="image-input"
        />
      </div>
    );
  }
}
AddMovieF1.propTypes = {
  state: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default AddMovieF1;
