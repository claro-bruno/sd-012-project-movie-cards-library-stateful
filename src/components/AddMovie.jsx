import React from 'react';
import PropTypes from 'prop-types';
import GenericInput from './GenericInput';
import AddMovieSelect from './AddMovieSelect';
import AddMovieTextarea from './AddMovieTextarea';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onChangeHandler({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
    // console.log(name);
  }

  onClickHandle(evt) {
    evt.preventDefault();
    const { onClick } = this.props;
    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <GenericInput
          label="Título"
          name="title"
          id="title-input"
          value={ title }
          type="text"
          onChange={ this.onChangeHandler }
        />
        <GenericInput
          label="Subtítulo"
          name="subtitle"
          id="subtitle-input"
          value={ subtitle }
          type="text"
          onChange={ this.onChangeHandler }
        />
        <GenericInput
          label="Imagem"
          name="imagePath"
          id="image-input"
          value={ imagePath }
          type="text"
          onChange={ this.onChangeHandler }
        />
        <GenericInput
          label="Avaliação"
          name="rating"
          id="rating-input"
          value={ rating }
          type="number"
          onChange={ this.onChangeHandler }
        />
        <AddMovieTextarea onChange={ this.onChangeHandler } storyline={ storyline } />
        <AddMovieSelect onChange={ this.onChangeHandler } value={ genre } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.onClickHandle }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
