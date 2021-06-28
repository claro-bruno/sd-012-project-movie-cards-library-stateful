import React from 'react';
import PropTypes from 'prop-types';
import InputSimple from './InputSimple';
import InputTextArea from './InputTextArea';
import ImgInputAddMovie from './ImgInputAddMovie';

class FormAddMovie extends React.Component {
  render() {
    const { subtitle, title, imagePath, storyline, rating, handler } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputSimple
          labelText="Título"
          name="title"
          value={ title }
          onChange={ handler }
        />
        <InputSimple
          labelText="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ handler }
        />
        <ImgInputAddMovie value={ imagePath } onChange={ handler } />
        <InputTextArea
          name="storyline"
          value={ storyline }
          onChange={ handler }
        />
        <InputSimple
          name="rating"
          value={ rating }
          labelText="Avaliação"
          onChange={ handler }
        />
      </form>
    );
  }
}

FormAddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};

export default FormAddMovie;
