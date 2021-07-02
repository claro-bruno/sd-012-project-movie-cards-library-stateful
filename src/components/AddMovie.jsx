import React from 'react';
import PropTypes from 'prop-types';

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
  }

  reset = (att) => {
    att(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleComponents = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  makeTitle = (title) => {
    const titleMaker = (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleComponents }
        />
      </label>
    );
    return titleMaker;
  }

  makeSubtitle = (subtitle) => {
    const subTitleMaker = (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleComponents }
        />
      </label>
    );
    return subTitleMaker;
  }

  makeImage = (imagePath) => {
    const imageMaker = (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleComponents }
        />
      </label>
    );
    return imageMaker;
  }

  makeTextArea = (storyline) => {
    const textAreaMaker = (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleComponents }
        />
      </label>
    );
    return textAreaMaker;
  }

  makeRating = (rating) => {
    const ratingMaker = (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleComponents }
        />
      </label>
    );
    return ratingMaker;
  }

  makeGenre = (genre) => {
    const genreMaker = (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.handleComponents }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>);
    return genreMaker;
  }

  makeButton = (func) => {
    const buttonMaker = (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => this.reset(func) }
      >
        Adicionar filme
      </button>
    );
    return buttonMaker;
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.makeTitle(title)}
        {this.makeSubtitle(subtitle)}
        {this.makeImage(imagePath)}
        {this.makeTextArea(storyline)}
        {this.makeRating(rating)}
        {this.makeGenre(genre)}
        {this.makeButton(onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
