import React from 'react';
// import PropTypes from 'prop-types';
// import Rating from './Rating';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleAddMovie(event) {
    this.setState({
      subtitle: event.target.subtitle,
      title: event.target.title,
    //   imagePath: event.target.imagePath,
    //   storyline: event.target.storyline,
    //   rating: event.target.rating,
    //   genre: event.target.genre,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            id="titulo"
            type="text"
            value={ title }
            onChange={ this.handleAddMovie }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitulo"
            value={ subtitle }
            onChange={ this.handleAddMovie }
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
