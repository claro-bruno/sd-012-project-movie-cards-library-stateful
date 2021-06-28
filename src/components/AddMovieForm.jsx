import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

class AddMovieForm extends Component {
  render() {
    const
      { title,
        subtitle,
        imagePath,
        storyline,
        rating,
        genre,
        onClick,
        onChange,
      } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          value={ title }
          id="title"
          onChange={ onChange }
        />
        <Input
          label="Subtítulo"
          value={ subtitle }
          id="subtitle"
          onChange={ onChange }
        />
        <Input
          label="Imagem"
          value={ imagePath }
          id="image"
          onChange={ onChange }
        />
        <TextArea storyline={ storyline } onChange={ onChange } />
        <Input
          label="Avaliação"
          type="number"
          value={ rating }
          id="rating"
          onChange={ onChange }
        />
        <Select genre={ genre } onChange={ onChange } />
        <button
          data-testid="send-button"
          onClick={ onClick }
          type="submit"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovieForm.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  genre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieForm;
