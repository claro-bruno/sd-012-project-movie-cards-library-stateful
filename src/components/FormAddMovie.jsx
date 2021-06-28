import React from 'react';
import PropTypes from 'prop-types';
import InputSimple from './InputSimple';
import InputTextArea from './InputTextArea';
import ImgInputAddMovie from './ImgInputAddMovie';

class FormAddMovie extends React.Component {
  render() {
    const { subtitle, title, imagePath, storyline, textInputHandler } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputSimple
          labelText="Título"
          name="title"
          value={ title }
          onChange={textInputHandler }
        />
        <InputSimple
          labelText="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ textInputHandler }
        />
        <ImgInputAddMovie value={ imagePath } onChange={ textInputHandler } />
        <InputTextArea name="storyline" value={ storyline } onChange={ textInputHandler } />
        {/* <InputSimple
          name="rating"
          value={ rating }
          labelText="Avaliação"
          onChange={textInputHandler}
        /> */}
      </form>
    );
  }
}

FormAddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  textInputHandler: PropTypes.func.isRequired,
};

export default FormAddMovie;
