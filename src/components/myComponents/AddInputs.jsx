import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddInput extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    return (
      <>
        <Input
          inputID="title-input"
          labelID="title-input-label"
          text="Título"
          name="title"
          value={ state.title }
          handleChange={ handleChange }
        />
        <Input
          inputID="subtitle-input"
          labelID="subtitle-input-label"
          text="Subtítulo"
          name="subtitle"
          value={ state.subtitle }
          handleChange={ handleChange }
        />
        <Input
          inputID="image-input"
          labelID="image-input-label"
          text="Imagem"
          name="imagePath"
          value={ state.imagePath }
          handleChange={ handleChange }
        />
        <Input
          inputID="storyline-input"
          labelID="storyline-input-label"
          text="Sinopse"
          name="storyline"
          inputType="textarea"
          value={ state.storyline }
          handleChange={ handleChange }
        />
        <Input
          inputID="rating-input"
          labelID="rating-input-label"
          text="Avaliação"
          type="number"
          name="rating"
          value={ state.rating }
          handleChange={ handleChange }
        />
      </>
    );
  }
}

AddInput.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
  }).isRequired,

  handleChange: PropTypes.func.isRequired,
};

export default AddInput;
