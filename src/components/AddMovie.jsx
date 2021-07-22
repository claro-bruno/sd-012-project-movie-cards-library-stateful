// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TypeText from './TypeText';
import Textarea from './Textarea';
import TypeNumber from './TypeNumber';
import InputSelect from './InputSelect';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };

    this.addMovieButton = this.addMovieButton.bind(this);
  }

  addMovieButton = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TypeText
          labelDescription="Título"
          inputId="title-input"
          value={ title }
          onChange={ ({ target }) => this.setState({ title: target.value }) }
        />
        <TypeText
          labelDescription="Subtítulo"
          inputId="subtitle-input"
          value={ subtitle }
          onChange={ ({ target }) => this.setState({ subtitle: target.value }) }
        />
        <TypeText
          labelDescription="Imagem"
          inputId="image-input"
          value={ imagePath }
          onChange={ ({ target }) => this.setState({ imagePath: target.value }) }
        />
        <Textarea
          labelDescription="Sinopse"
          inputId="storyline-input"
          value={ storyline }
          onChange={ ({ target }) => this.setState({ storyline: target.value }) }
        />
        <TypeNumber
          labelDescription="Avaliação"
          inputId="rating-input"
          value={ rating }
          onChange={ ({ target }) => this.setState({ rating: target.value }) }
        />
        <InputSelect
          labelDescription="Gênero"
          inputId="genre-input"
          value={ genre }
          onChange={ ({ target }) => this.setState({ genre: target.value }) }
        />
        <button type="submit" data-testid="send-button" onClick={ this.addMovieButton }>
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
