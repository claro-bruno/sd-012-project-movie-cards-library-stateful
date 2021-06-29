import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class InputsText extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, handleChange } = this.props;
    return (
      <section>
        <Input
          testIdLabel="title-input-label"
          labelText="Título"
          name="title"
          value={ title }
          testid="title-input"
          onChange={ handleChange }
        />
        <Input
          testIdLabel="subtitle-input-label"
          labelText="Subtítulo"
          name="subtitle"
          value={ subtitle }
          testid="subtitle-input"
          onChange={ handleChange }
        />
        <Input
          testIdLabel="image-input-label"
          labelText="Imagem"
          name="imagePath"
          value={ imagePath }
          testid="image-input"
          onChange={ handleChange }
        />
        <Input
          testIdLabel="storyline-input-label"
          labelText="Sinopse"
          name="storyline"
          value={ storyline }
          testid="storyline-input"
          onChange={ handleChange }
        />
      </section>
    );
  }
}

InputsText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputsText;
