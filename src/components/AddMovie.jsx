import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './AddMovie-Inputs/TextInput';
import Select from './AddMovie-Inputs/Select';
import Button from './AddMovie-Inputs/Button';
import AddMovieForm from './AddMovieForm';

class addMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePatch: '',
      storyline: '',
      rating: 0,
      selectedGenre: 'action',
    };
    this.handleChanger = this.handleChanger.bind(this);
    this.onClick2 = this.onClick2.bind(this);
  }

  handleChanger({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  onClick2(onClick) {
    onClick({ ...this.state });
    this.setState({
      subtitle: '',
      title: '',
      imagePatch: '',
      storyline: '',
      rating: 0,
      selectedGenre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePatch, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieForm
          title={ title }
          subtitle={ subtitle }
          imagePatch={ imagePatch }
          storyline={ storyline }
          handleChanger={ this.handleChanger }
        />
        <TextInput
          valorInicial={ rating }
          valorAlterado={ this.handleChanger }
          dataTestid="rating-input"
          dataTestidLabel="rating-input-label"
          labelTitle="Avaliação"
          nome="rating"
          tipo="number"
        />
        <Select
          valorInicial={ genre }
          valorAlterado={ this.handleChanger }
          dataTestidLabel="genre-input-label"
          dataTestid="genre-input"
          dataTestidOption="genre-option"
          labelTitle="Gênero"
          nome="selectedGenre"
          optionValue={ ['action', 'comedy', 'thriller'] }
          array={ ['Ação', 'Comédia', 'Suspense'] }
        />
        <Button
          buttonTitle="Adicionar filme"
          dataTestid="send-button"
          click={ () => this.onClick2(onClick) }
        />
      </form>
    );
  }
}

addMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default addMovie;
