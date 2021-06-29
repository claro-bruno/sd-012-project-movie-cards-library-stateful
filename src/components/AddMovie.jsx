import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleOnClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        // genre: 'action',
      },
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          text="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ this.onChange }
        />
        <InputText
          text="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.onChange }
        />
        <InputText
          text="Imagem"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.onChange }
        />
        <InputText
          text="Sinopse"
          type="textarea"
          name="storyline"
          value={ storyline }
          onChange={ this.onChange }
        />
        <InputText
          type="number"
          text="Avaliação"
          name="rating"
          value={ rating }
          onChange={ this.onChange }
        />
        <button type="button" data-testid="send-button" onClick={ this.handleOnClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequeired;

export default AddMovie;
