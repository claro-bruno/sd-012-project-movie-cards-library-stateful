import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputImagem from './InputImagem';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleOnClick = () => {
    const { onClick } = this.props;
    const { movieAdd } = this.state;
    this.setState(
      {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
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
          onChange={ this.onChange }
        />
        <InputText
          text="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.onChange }
        />
        <InputImagem
          imagePath={ imagePath }
          handleChange={ this.onChange }
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
        <InputSelect
          genre={ genre }
          handleChange={ this.onChange }
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
