import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class Form extends React.Component {
  render() {
    const { state, onChange } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Input
          labelId="title-input-label"
          innerText="Título"
          inputId="title-input"
          nameInput="title"
          valueInput={ state.title }
          onChangeInput={ onChange }
        />
        <Input
          labelId="subtitle-input-label"
          innerText="Subtítulo"
          inputId="subtitle-input"
          nameInput="subtitle"
          valueInput={ state.subtitle }
          onChangeInput={ onChange }
        />
        <Input
          labelId="image-input-label"
          innerText="Imagem"
          inputId="image-input"
          nameInput="imagePath"
          valueInput={ state.imagePath }
          onChangeInput={ onChange }
        />
        <Input
          labelId="storyline-input-label"
          innerText="Sinopse"
          inputId="storyline-input"
          nameInput="storyline"
          typeInput="textarea"
          valueInput={ state.storyline }
          onChangeInput={ onChange }
        />
        <Input
          labelId="rating-input-label"
          innerText="Avaliação"
          inputId="rating-input"
          nameInput="rating"
          typeInput="number"
          valueInput={ state.rating }
          onChangeInput={ onChange }
        />
        <Select state={ state } onChange={ onChange } />
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Form;
