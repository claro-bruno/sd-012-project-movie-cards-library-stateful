import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputImagem from './InputImagem';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    return this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    const { movieAdd } = this.state;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(movieAdd);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          text="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
        <InputText
          text="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <InputImagem
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <InputText
          text="Sinopse"
          type="textarea"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <InputText
          type="number"
          text="Avaliação"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
        <InputSelect
          genre={ genre }
          handleChange={ this.handleChange }
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
