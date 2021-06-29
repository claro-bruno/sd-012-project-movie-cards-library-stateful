import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = initialState;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((estadoAnterior) => ({
      title: estadoAnterior.title,
      subtitle: estadoAnterior.subtitle,
      imagePath: estadoAnterior.imagePath,
    }));
  }

  render() {
    const { onclick } = this.props;
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-titulo" data-testid="title-input-label">
          Título
          <input
            placeholder={ title }
            onChange={ this.handleClick }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="input-Subtitulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            placeholder={ subtitle }
            onChange={ this.handleClick }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="input-imagem" data-testid="image-input-label">
          Imagem
          <input
            placeholder={ imagePath }
            onChange={ this.handleClick }
            data-testid="image-input"
          />
        </label>
        { onclick }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
  initialState: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    genre: PropTypes.string,
  }).isRequired,
};
export default AddMovie;
