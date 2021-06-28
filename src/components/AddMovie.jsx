import React from 'react';
import InputSimple from './InputSimple';
import InputTextArea from './InputTextArea';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: "action",
    };
    this.textInputHandler = this.textInputHandler.bind(this);
  }

  textInputHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputSimple
          labelText="Título"
          LabelDataTestid="title-input-label"
          InputDataTestid="title-input"
          name="title"
          value={ title }
          onChange={ this.textInputHandler }
        />

        <InputSimple
          labelText="Subtítulo"
          LabelDataTestid="subtitle-input-label"
          InputDataTestid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ this.textInputHandler }
        />

        <InputSimple
          labelText="Imagem"
          LabelDataTestid="image-input-label"
          InputDataTestid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ this.textInputHandler }
        />

        <InputTextArea
          labelText="Sinopse"
          LabelDataTestid="storyline-input-label"
          InputDataTestid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.textInputHandler }
        />

      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
};

export default AddMovie;
