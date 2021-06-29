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

  handleChange() {
    console.log(this.state);
  }

  render() {
    const { onClick } = this.props;
    // const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        { onClick() }
        <label htmlFor="find-title" data-testid="title-input-label">
          Título
          <input type="text" id="find-title" data-testid="title-input" />
        </label>
        <label htmlFor="find-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" id="find-subtitle" data-testid="subtitle-input" />
        </label>
        <label htmlFor="find-image" data-testid="image-input-label">
          Imagem
          <input type="text" id="find-image" data-testid="image-input" />
        </label>
        <label htmlFor="find-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea id="find-storyline" data-testid="storyline-input" />
        </label>
        <input type="text" id="find-rating" />
        <input type="text" id="find-genre" />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
