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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log(this.state);
  }

  render() {
    const { onClick } = this.props;
    const { rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        { onClick() }
        <label htmlFor="add-title" data-testid="title-input-label">
          Título
          <input type="text" id="add-title" data-testid="title-input" />
        </label>
        <label htmlFor="add-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" id="add-subtitle" data-testid="subtitle-input" />
        </label>
        <label htmlFor="add-image" data-testid="image-input-label">
          Imagem
          <input type="text" id="add-image" data-testid="image-input" />
        </label>
        <label htmlFor="add-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea id="add-storyline" data-testid="storyline-input" />
        </label>
        <label htmlFor="add-rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="add-rating"
            data-testid="rating-input"
            defaultValue={ rating }
          />
        </label>
        <input type="text" id="find-genre" />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
