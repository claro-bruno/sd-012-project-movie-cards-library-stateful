// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './subcomponents/Titulo';
import Subtitulo from './subcomponents/Subtitulo';
import ImagePath from './subcomponents/ImagePath';
import Sinopse from './subcomponents/Sinopse';
import Avaliacao from './subcomponents/Avaliacao';
import Genre from './subcomponents/Genre';

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
    this.genreHandle = this.genreHandle.bind(this);
    this.titleHandle = this.titleHandle.bind(this);
    this.subtitleHandle = this.subtitleHandle.bind(this);
    this.imagePathHandle = this.imagePathHandle.bind(this);
    this.storylineHandle = this.storylineHandle.bind(this);
    this.ratingHandle = this.ratingHandle.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  titleHandle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  subtitleHandle = (event) => {
    this.setState({
      subtitle: event.target.value,
    });
  }

  imagePathHandle = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
  }

  storylineHandle = (event) => {
    this.setState({
      storyline: event.target.value,
    });
  }

  ratingHandle = (event) => {
    this.setState({
      rating: event.target.value,
    });
  }

  genreHandle = (event) => {
    this.setState({
      genre: event.target.value,
    });
  }

  clickHandle = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick();
    this.setState = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { rating, genre, subtitle, title, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo title={ title } changeTextHandle={ this.titleHandle } />
        <Subtitulo subtitle={ subtitle } changeTextHandle={ this.subtitleHandle } />
        <ImagePath imagePath={ imagePath } changeTextHandle={ this.imagePathHandle } />
        <Sinopse storeyline={ storyline } changeTextHandle={ this.storylineHandle } />
        <Avaliacao rating={ rating } changeNumberHandle={ this.ratingHandle } />
        <Genre genre={ genre } changeGenreHandle={ this.genreHandle } />
        <button
          type="submit"
          className="btn btn-primary"
          data-testid="send-button"
          onClick={ this.clickHandle }
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
