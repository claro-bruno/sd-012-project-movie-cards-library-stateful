// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieGenre from './MovieGenre';
import TitleSubImg from './TitleSubImg';

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

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  clickEvent() {
    const { onClick } = this.props;
    onClick(this.state);
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
    const { storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleSubImg state={ this.state } handleChange={ this.handleChange } />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            cols="20"
            rows="5"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            onChange={ this.handleChange }
            value={ rating }
            name="rating"
          />
        </label>
        <MovieGenre name="genre" value={ genre } onChange={ this.handleChange } />
        <button
          onClick={ () => this.clickEvent }
          data-testid="send-button"
          type="submit"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: PropTypes.func,
};

export default AddMovie;
