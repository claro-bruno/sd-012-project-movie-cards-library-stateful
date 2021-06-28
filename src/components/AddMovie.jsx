import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <Input
            inputLabel="Título"
            inputLabelTestId="title-input-label"
            inputValue={ title }
            onChangeInput={ this.handleChange }
            inputId="add-title"
            inputTestId="title-input"
            inputName="title"
          />
          <Input
            inputLabel="Subtítulo"
            inputLabelTestId="subtitle-input-label"
            inputValue={ subtitle }
            onChangeInput={ this.handleChange }
            inputId="add-subtitle"
            inputTestId="subtitle-input"
            inputName="subtitle"
          />
          <Input
            inputLabel="Imagem"
            inputLabelTestId="image-input-label"
            inputValue={ imagePath }
            onChangeInput={ this.handleChange }
            inputId="add-image"
            inputTestId="image-input"
            inputName="imagePath"
          />
          <Textarea
            textareaLabel="Sinopse"
            textareaLabelTestId="storyline-input-label"
            textareaValue={ storyline }
            onChangeTextarea={ this.handleChange }
            textareaId="add-storyline"
            textareaTestId="storyline-input"
            textareaName="storyline"
          />
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
